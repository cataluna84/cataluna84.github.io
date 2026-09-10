#!/usr/bin/env python3
"""Detect content drift between the portfolio's four content files.

`mayank_bhaskar_projects.md` is the source of truth. The site (`index.html` +
`script.js`) and the standalone resume are hand-synced from it, so figures
silently diverge -- competitor counts, medal attribution, competition years.
This asserts they agree.

Runs offline with no credentials by default. Pass --links to additionally sweep
every URL for liveness.

Exit codes: 0 in sync, 1 drift found, 2 usage or parse error.
"""
import argparse
import os
import re
import sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MD = "mayank_bhaskar_projects.md"
JS = "script.js"
HTML = "index.html"
RESUME = "mayank_bhaskar_resume.html"
ABOUT = "aboutme.md"

# URLs that answer scripted requests with a block code regardless of validity:
# OpenReview's PDF endpoint sits behind Cloudflare and the Apple short domain
# rejects bare clients. Reported as skipped rather than failed.
LINK_ALLOWLIST = (
    "openreview.net/pdf",
    "apps.apple.com",
)

# LinkedIn's non-standard rate-limit code. It says nothing about the resource, so
# it must not count as a failure -- but LinkedIn still returns a real 404 for a
# dead company page, and that signal is worth keeping.
BOT_BLOCK_CODES = (999,)


class Report:
    def __init__(self):
        self.problems = []

    def fail(self, category, detail):
        self.problems.append((category, detail))

    def check(self, category, label, values):
        """values: {source_name: value}. Flags any disagreement among them."""
        present = {k: v for k, v in values.items() if v is not None}
        missing = [k for k, v in values.items() if v is None]
        for k in missing:
            self.fail(category, f"{label}: not found in {k}")
        if len(set(present.values())) > 1:
            rendered = ", ".join(f"{k}={v!r}" for k, v in sorted(present.items()))
            self.fail(category, f"{label}: disagreement -> {rendered}")


def read(name):
    path = os.path.join(ROOT, name)
    if not os.path.exists(path):
        sys.exit(f"error: {name} not found under {ROOT}")
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def first(pattern, text, group=1):
    m = re.search(pattern, text)
    return m.group(group) if m else None


def norm_int(s):
    return None if s is None else s.replace(",", "")


# --- extractors -------------------------------------------------------------

def js_kaggle_rows(js):
    """Keyed by Kaggle slug so display-name edits cannot break the join."""
    rows = {}
    for m in re.finditer(
        r'\{\s*name:\s*"(.*?)",\s*slug:\s*"(.*?)",\s*placement:\s*"(.*?)",'
        r'\s*type:\s*"(.*?)",\s*time:\s*"(.*?)",\s*medal:\s*"(.*?)"\s*\}', js):
        name, slug, place, _type, year, medal = m.groups()
        rows[slug] = {"name": name, "place": place, "year": year, "medal": medal or ""}
    return rows


def md_kaggle_rows(md):
    """Parse the '**Nth out of X teams** | ... | YEAR' blocks under each link.

    The link-text group tolerates one nested bracket pair, because at least one
    entry is titled 'Dog Breed Identification [ML Bootcamp]'.
    """
    rows = {}
    pattern = (
        r'\[((?:[^\][]|\[[^\]]*\])+)\]\((https://www\.kaggle\.com/competitions/[^)]+)\)\*{0,2}'
        r'[^\n]*\n\*\*([\d,]+)(?:st|nd|rd|th) out of ([\d,]+) teams\*\*([^\n]*)'
    )
    for m in re.finditer(pattern, md):
        title, url, rank, total, tail = m.groups()
        medal = "Silver" if "Silver" in tail else ("Bronze" if "Bronze" in tail else "")
        year = first(r'\b(20\d\d)\b', tail) or ""
        slug = url.rsplit("/", 1)[-1]
        rows[slug] = {
            "title": title.strip(),
            "place": f"{norm_int(rank)}/{norm_int(total)}",
            "year": year,
            "medal": medal,
        }
    return rows


def js_element_ids(js):
    return set(re.findall(r"getElementById\(['\"]([^'\"]+)['\"]\)", js))


def html_ids(html):
    return set(re.findall(r'\bid="([^"]+)"', html))


def all_urls(text):
    # Trailing punctuation from prose and markdown link syntax is not part of the URL.
    urls = {u.rstrip(').,;"\'>') for u in re.findall(r'https?://[^\s)"\'<>\]]+', text)}
    # script.js builds Kaggle links from a template literal; the raw form is not a URL.
    return {u for u in urls if "${" not in u}


# --- checks -----------------------------------------------------------------

def run_checks(rep):
    md, js, html = read(MD), read(JS), read(HTML)
    resume, about = read(RESUME), read(ABOUT)

    # 1. Kaggle competitor pool. The total must be comma-grouped: index.html also
    #    carries an abbreviated "202K" highlight card that would otherwise match.
    grouped = r'\d{1,3}(?:,\d{3})+'
    rep.check("kaggle", "competitor pool", {
        MD: norm_int(first(r'\*\*Rank:\*\*\s*[\d,]+\s+of\s+([\d,]+)\s+Competitors', md)),
        HTML: norm_int(first(rf'Rank [\d,]+ / ({grouped})', html)),
        JS: norm_int(first(rf'Rank [\d,]+ / ({grouped}) globally', js)),
        RESUME: norm_int(first(rf'rank [\d,]+ / ({grouped})', resume)),
    })

    # 2. Profile rank
    rep.check("kaggle", "profile rank", {
        MD: norm_int(first(r'\*\*Rank:\*\*\s*([\d,]+)\s+of', md)),
        HTML: norm_int(first(rf'Rank ([\d,]+) / {grouped}', html)),
        JS: norm_int(first(rf'Rank ([\d,]+) / {grouped} globally', js)),
        RESUME: norm_int(first(rf'rank ([\d,]+) / {grouped}', resume)),
    })

    # 3. Completed-competition count. The JS table is the ground truth for the
    #    site, so compare the literal row count against every stated total.
    js_rows = js_kaggle_rows(js)
    md_rows = md_kaggle_rows(md)
    rep.check("kaggle", "competition count", {
        f"{JS} (row count)": str(len(js_rows)),
        f"{MD} (row count)": str(len(md_rows)),
        f"{MD} (stated)": first(r'participation in (\d+)\+? Kaggle competitions', md),
        f"{JS} (footnote)": first(r'All (\d+) completed competitions', js),
        f"{HTML} (subtitle)": first(r'across (\d+) completed competitions', html),
        f"{HTML} (hero stat)": first(
            r'hero-stat-value">(\d+)</span><span class="hero-stat-label">Kaggle', html),
        f"{RESUME} (skills)": first(r'(\d+) competitions\)', resume),
        f"{RESUME} (experience)": first(r'across (\d+) completed competitions', resume),
    })

    # 4. Medal tallies
    js_medals = Counter(r["medal"] for r in js_rows.values() if r["medal"])
    md_medals = Counter(r["medal"] for r in md_rows.values() if r["medal"])
    stated = first(r'\*\*Medals:\*\*\s*(\d+)\s+Silver,\s*(\d+)\s+Bronze', md)
    md_stated = None
    m = re.search(r'\*\*Medals:\*\*\s*(\d+)\s+Silver,\s*(\d+)\s+Bronze', md)
    if m:
        md_stated = f"Silver={m.group(1)} Bronze={m.group(2)}"
    fmt = lambda c: f"Silver={c.get('Silver', 0)} Bronze={c.get('Bronze', 0)}"
    rep.check("medals", "medal tally", {
        f"{JS} (rows)": fmt(js_medals),
        f"{MD} (rows)": fmt(md_medals),
        f"{MD} (stated)": md_stated,
        f"{HTML} (subtitle)": (
            lambda s, b: f"Silver={s} Bronze={b}" if s and b else None
        )(first(r'(\d+) Silver \+ \d+ Bronze', html),
          first(r'\d+ Silver \+ (\d+) Bronze', html)),
    })

    # 5. Per-competition agreement, joined on Kaggle slug.
    for slug in sorted(set(md_rows) | set(js_rows)):
        mrow, jrow = md_rows.get(slug), js_rows.get(slug)
        if jrow is None:
            rep.fail("competitions", f"{slug!r} ({mrow['title']!r}) is in {MD} but has no row in {JS}")
            continue
        if mrow is None:
            rep.fail("competitions", f"{slug!r} ({jrow['name']!r}) is a row in {JS} but absent from {MD}")
            continue
        for field in ("place", "year", "medal"):
            if mrow[field] != jrow[field]:
                rep.fail("competitions", (
                    f"{slug}: {field} is {mrow[field]!r} in {MD} "
                    f"but {jrow[field]!r} in {JS}"))

    # 6. Years of experience
    rep.check("bio", "years of experience", {
        f"{ABOUT}": first(r'my last (\d+) years', about),
        f"{HTML} (hero stat)": first(
            r'hero-stat-value">(\d+)\+</span><span class="hero-stat-label">Years', html),
        f"{HTML} (hero title)": first(r'Researcher &mdash; (\d+)\+ years|Researcher — (\d+)\+ years', html)
                                or first(r'(\d+)\+ years building production', html),
        f"{HTML} (meta)": first(r'(\d+)\+ years building production AI systems\. ARC', html),
    })

    # 7. Every DOM target script.js writes to must exist in index.html. A rename
    #    on either side silently blanks a whole section otherwise.
    ids = html_ids(html)
    for target in sorted(js_element_ids(js)):
        if target not in ids:
            rep.fail("dom", f"script.js writes to #{target}, absent from {HTML}")

    return {MD: md, JS: js, HTML: html, RESUME: resume, ABOUT: about}


def check_links(sources, rep):
    import urllib.error
    import urllib.request

    urls = {}
    for name, text in sources.items():
        for url in all_urls(text):
            urls.setdefault(url, []).append(name)

    # GET rather than HEAD: Kaggle answers HEAD with 404 even for live pages, and
    # a browser-shaped User-Agent avoids blanket bot rejections.
    headers = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                       "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"),
        "Accept": "text/html,application/xhtml+xml,*/*",
    }

    print(f"\nSweeping {len(urls)} unique URLs...")
    for url in sorted(urls):
        if any(pat in url for pat in LINK_ALLOWLIST):
            print(f"  skip {url}  (allowlisted: blocks scripted requests)")
            continue
        req = urllib.request.Request(url, method="GET", headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=25) as resp:
                code = resp.status
                resp.read(1024)  # touch the body so the connection closes cleanly
        except urllib.error.HTTPError as exc:
            code = exc.code
        except Exception as exc:
            code = str(exc)
        if code in BOT_BLOCK_CODES:
            print(f"  {code}  {url}  (bot-blocked, not treated as a failure)")
            continue
        ok = isinstance(code, int) and 200 <= code < 300
        print(f"  {code}  {url}")
        if not ok:
            rep.fail("links", f"{url} -> {code} (referenced by {', '.join(sorted(set(urls[url])))})")


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--links", action="store_true",
                    help="also check every URL for liveness (requires network)")
    ap.add_argument("--quiet", action="store_true", help="only print problems")
    args = ap.parse_args()

    rep = Report()
    sources = run_checks(rep)
    if args.links:
        check_links(sources, rep)

    if not rep.problems:
        if not args.quiet:
            print("content in sync: all figures agree across "
                  f"{MD}, {JS}, {HTML}, {RESUME}, {ABOUT}")
        return 0

    print(f"\n{len(rep.problems)} content drift problem(s):\n", file=sys.stderr)
    for category, detail in rep.problems:
        print(f"  [{category}] {detail}", file=sys.stderr)
    print(f"\n{MD} is the source of truth. Update the other files to match, "
          "then re-run this check.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    try:
        sys.exit(main())
    except SystemExit:
        raise
    except Exception as exc:  # noqa: BLE001 - surface parse failures distinctly
        print(f"error: {exc}", file=sys.stderr)
        sys.exit(2)
