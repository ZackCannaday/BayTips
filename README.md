# BayTips

Mobile-first training app for **automotive service advisors** and **lube technicians**.

## Current version: 0.2

**12 services** fully detailed:
- Oil Change & Filter
- Cabin Air Filter
- Engine Air Filter
- Transmission Fluid Service
- Coolant / Antifreeze Service
- Brake Fluid Flush
- Tire Rotation & Inspection
- Wiper Blade Replacement
- Battery Test & Service
- Fuel Filter Replacement
- Differential Fluid Service
- Power Steering Fluid Service

**Soft skills expanded:**
- 6 objection drills
- 5 follow-up scripts
- 3 upsell / call frameworks

**Practice quiz:** 10 questions matched to the services above

## Live site
After enabling GitHub Pages (Settings → Pages → main branch / root):

**https://zackcannaday.github.io/BayTips/**

## How to update the live app
The full app is a single `index.html` file.

1. Download the latest `index-v2.html` from the conversation or artifacts
2. In this repo, replace `index.html` with that file (rename to `index.html`)
3. Commit
4. Wait ~1 minute and refresh the Pages URL

## Local testing
```bash
python3 -m http.server 8080
# or
npx serve
```
