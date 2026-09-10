# Portfolio — cataluna84.github.io

Personal portfolio site for **Mayank Bhaskar** — Founder & CEO of *OM Enterprises — AI Research & Engineering Labs*.

Live site: https://cataluna84.github.io
GitHub profile: https://github.com/cataluna84

## What this is

A single-page, framework-free portfolio built with vanilla HTML, CSS, and JavaScript. Designed to deploy to GitHub Pages with zero build step. All site content lives as a JS object literal in `script.js` and is injected into the DOM on load.

A small Python side-channel (`scripts/extract_kaggle.py`) pulls live data from the Kaggle and Weights & Biases APIs — useful for keeping competition placements and run counts up to date.

## Stack

- **Frontend:** HTML5, CSS3 (custom design system — dark theme, glassmorphism, gradient accents), vanilla JS
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Data tooling:** Python 3.12, [`uv`](https://docs.astral.sh/uv/) for env management, `kaggle`, `wandb`, `pandas`
- **Deploy target:** GitHub Pages

## File structure

```
.
├── index.html                  # Site markup (single page, 13 sections)
├── style.css                   # Design system + section styles + responsive rules
├── script.js                   # portfolioData (content) + DOM injection + nav/reveal logic
├── ProfilePic.png              # Hero avatar
├── mayank_bhaskar_resume.html  # Standalone print-ready résumé
├── mayank_bhaskar_projects.md  # Long-form project narrative (source of truth)
├── aboutme.md                  # Long-form bio + socials (source of truth)
├── extracted_competitions.json # Partial scratch output from the extractor
├── scripts/
│   ├── extract_kaggle.py       # Pulls Kaggle + W&B data via API
│   └── check_content_sync.py   # Fails when the content files disagree
├── pyproject.toml              # uv project definition
├── uv.lock
├── .env.example                # Template — copy to .env and fill in real keys
└── .gitignore
```

## Run locally

The site is static — open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Update content

All visible content (projects, ARC results, Kaggle table, experience, skills, blog) lives in **one place**: the `portfolioData` object at the top of `script.js`. Edit the relevant array, save, refresh.

`mayank_bhaskar_projects.md` and `aboutme.md` are the **source of truth**. The site (`script.js` + `index.html`) and `mayank_bhaskar_resume.html` are hand-synced from them, so write the prose there first, then propagate.

There is deliberately no build step — the site must keep working when `index.html` is opened straight off disk. Instead, a checker catches the figures that drift:

```bash
python3 scripts/check_content_sync.py           # competitor counts, ranks, medals, years, DOM wiring
python3 scripts/check_content_sync.py --links   # plus liveness of every URL
```

It exits non-zero on any disagreement and names both sides. The monthly reminder workflow runs it and pastes the report into the reminder issue.

## Data extractor (optional)

To pull fresh Kaggle/W&B stats:

```bash
# One-time setup
uv sync

# Copy the env template and fill in real values
cp .env.example .env
# edit .env

# Load env and run
set -a; . ./.env; set +a
uv run python scripts/extract_kaggle.py
```

The script reads `KAGGLE_USERNAME`, `KAGGLE_KEY`, and `WANDB_API_KEY` from the environment. Never commit `.env` — it is already gitignored.

## Deployment

Push to a public repo named `cataluna84.github.io` (user site) or enable Pages on any branch under Settings → Pages.

## License

All rights reserved. Code style and structure may be referenced; content (bio, project descriptions, achievements) is personal and not for reuse.
