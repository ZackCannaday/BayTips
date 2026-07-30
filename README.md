# BayTips

Mobile-first training app for **automotive service advisors** and **lube technicians**.

## Current status
Core app is pushed and working:
- 4 fully fleshed services (Oil Change, Cabin Filter, Engine Air Filter, Transmission Fluid)
- Full soft skills (daily checklist, objection drills, follow-up scripts, upsell frameworks)
- Practice quizzes
- Search, categories, sales scripts (Beginner / Intermediate / Closer), cause & effect, objections

More services can be added to `data.js` over time.

## How to run

### Live (recommended)
1. Go to **Settings → Pages**
2. Source: Deploy from a branch → **main** → **/ (root)**
3. Save
4. Wait ~1 minute, then open:  
   **https://zackcannaday.github.io/BayTips/**

### Local
```bash
npx serve
# or
python3 -m http.server 8080
```

## Files
- `index.html` – entry point
- `data.js` – services + soft skills content
- `app.js` – React application
