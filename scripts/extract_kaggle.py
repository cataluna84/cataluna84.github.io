"""Extract all Kaggle + W&B data for portfolio.

Requires environment variables (load from .env, e.g. via `set -a; . ./.env; set +a`):
  KAGGLE_USERNAME, KAGGLE_KEY, WANDB_API_KEY
"""
import os, json, sys

for var in ("KAGGLE_USERNAME", "KAGGLE_KEY"):
    if not os.environ.get(var):
        sys.exit(f"Missing required env var: {var}. See .env.example.")

# === KAGGLE ===
print("=" * 60)
print("KAGGLE DATA EXTRACTION")
print("=" * 60)
from kaggle.api.kaggle_api_extended import KaggleApi
api = KaggleApi()
api.authenticate()

print("\n--- Kernels ---")
try:
    kernels = api.kernels_list(user="cataluna84", page_size=100)
    for k in kernels:
        print(f"  {k.ref} | votes:{k.totalVotes}")
except Exception as e:
    print(f"  Error: {e}")

print("\n--- Competitions (page 1-3) ---")
for page in range(1, 4):
    try:
        comps = api.competitions_list(page=page)
        for c in comps[:5]:
            print(f"  p{page}: {c.ref} | {c.title}")
    except Exception as e:
        print(f"  Error p{page}: {e}")
        break

# Try to get submissions for the ARC competition
print("\n--- ARC-AGI-3 Submissions ---")
try:
    subs = api.competition_submissions("arc-prize-2026-arc-agi-3")
    for s in subs[:5]:
        print(f"  score:{s.publicScore} status:{s.status} date:{s.date}")
except Exception as e:
    print(f"  Error: {e}")

# === WANDB ===
print("\n" + "=" * 60)
print("WANDB DATA EXTRACTION")
print("=" * 60)

if not os.environ.get("WANDB_API_KEY"):
    print("  Skipping W&B: WANDB_API_KEY not set.")
    sys.exit(0)

try:
    import wandb
    wandb_api = wandb.Api()

    # List all projects for the user
    print("\n--- W&B Projects ---")
    try:
        projects = wandb_api.projects("cataluna84")
        for p in projects:
            print(f"  Project: {p.name} | entity: {p.entity}")
            # Get runs for each project
            try:
                runs = wandb_api.runs(f"{p.entity}/{p.name}", per_page=5)
                for r in runs:
                    print(f"    Run: {r.name} | state:{r.state} | created:{r.created_at}")
            except Exception as e2:
                print(f"    Runs error: {e2}")
    except Exception as e:
        print(f"  Projects error: {e}")

except ImportError:
    print("  wandb not installed, installing...")
    import subprocess
    subprocess.run(["uv", "add", "wandb"], capture_output=True)
    print("  wandb installed, re-run this script")
