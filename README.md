# ❄️ Ubuntu Wellness — 21-Day Diabetes Reversal Companion

A beautiful, fully client-side web app built from the **Ubuntu Wellness Holistic Diabetes
Self Care Empowerment Program** (the *WFPB Ubuntu Manual*). It guides you through the
21-day whole food plant-based journey with tracking tools and the complete education
library — all your data stays **on your device** (localStorage), no account needed.

> *"Through plant-based alchemy you will experience a reset at a cellular level."*
> #HEALINGAFRICACHALLENGE

![Tech](https://img.shields.io/badge/Next.js%2016-black) ![Tech](https://img.shields.io/badge/TypeScript-3178C6) ![Tech](https://img.shields.io/badge/Tailwind%204-06B6D4) ![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Section | What you can do |
|---|---|
| 🏠 **Home** | Program overview, key diabetes stats, WFPB benefits, the 4 Pillars, mission & clinically-proven outcomes |
| 🗓️ **My Journey** | Interactive 21-day tracker (tap days to complete), important milestone dates (Dr sessions on Day 1/11/21, blood draws Day 9/20), the 10-Step Checklist, SELF-CARE acronym |
| 🩸 **Glucose Log** | Record fasting & pre/post-meal readings per day, colour-coded values, fasting trend chart, personal averages, notes field, A1C reference table |
| 🍲 **Meal Plans** | All 3 interchangeable 7-day Ubuntu meal plans with the original manual pages, meal check-offs, Heavy Metal Detox Smoothie recipe, sprouting guide, stress relief |
| 📚 **Learn** | The full manual library — healing protocol (Water · Vegetables · Herbs · Legumes · Sprouts · Fruits · Grains), W-E-L-L-N-E-S-S principles, Diabetes 8 Self-Care Model, Emotional Guidance Scale, 4 Stages of Learning, root causes, complications, healthy eating guidelines, plant-based nutrient source tables |
| 🛒 **Shopping** | The complete Ubuntu shopping list (78 items, 6 categories) with check-offs, per-category progress and hide-checked mode |

- 📱 **Mobile-first** — bottom tab bar, responsive layouts, safe-area aware
- 💾 **Offline & private** — everything persists in your browser's localStorage
- 🚫 **No backend, no database, no accounts** — deploy anywhere

---

## 🚀 Quick start

```bash
# 1. install (bun or node ≥ 20 / npm)
bun install        # or: npm install

# 2. run the dev server
bun run dev        # or: npm run dev
# → http://localhost:3000

# 3. production build
bun run build && bun run start
```

---

## ⬆️ Push to GitHub

```bash
cd <this-project>

git init
git add .
git commit -m "Ubuntu Wellness 21-Day Diabetes Reversal Companion"

# create a repo on github.com first, then:
git remote add origin https://github.com/<your-username>/ubuntu-wellness-diabetes-reversal.git
git branch -M main
git push -u origin main
```

---

## ☁️ Deploy (free options)

**Vercel (recommended)** — import the repo at [vercel.com/new](https://vercel.com/new), zero config needed.

**Netlify / Cloudflare Pages** — build command `npm run build`, publish `.next` (use the Next.js plugin) or switch to static export (below).

**GitHub Pages (static export)** — the app is 100% client-side, so a static export works:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",   // replaces "standalone"
  images: { unoptimized: true },
};
```

Then `npm run build` and publish the `out/` folder (e.g. via the official
[Next.js Pages action](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml)).

---

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.tsx            # metadata & global shell
│   ├── page.tsx              # tab-based single-page app
│   └── globals.css           # Ubuntu Wellness brand theme
├── components/
│   ├── app/
│   │   ├── nav.tsx           # top nav + mobile bottom bar
│   │   ├── home.tsx          # dashboard / hero
│   │   ├── journey.tsx       # 21-day tracker + checklist
│   │   ├── glucose.tsx       # glucose log + A1C reference
│   │   ├── meals.tsx         # meal plans + recipes
│   │   ├── learn.tsx         # full education library
│   │   ├── shopping.tsx      # interactive shopping list
│   │   └── footer.tsx        # contact & resources
│   └── ui/                   # shadcn/ui primitives
└── lib/
    ├── program-data.ts       # all manual content, typed & centralised
    └── storage.ts            # localStorage store (useSyncExternalStore)
public/images/                # manual pages & program artwork
```

---

## 📖 About the program

Content is sourced from the **Ubuntu Wellness** 21-Day Diabetes & Other Lifestyle
Diseases Self-Management Program and [ubuntuwellness.com/diabetes-reversal](https://ubuntuwellness.com/diabetes-reversal/).
The Ubuntu Wellness Centre is at 99 Kloof Street, Gardens, Cape Town
(NPO Reg: 089-081). Program Nutritionist: Dawn Macfarlane ·
dawn@ubuntuwellness.com · +27 21 422 5140.

> ⚠️ **Medical disclaimer** — this app is an educational companion. It does not replace
> medical advice. Always work with your physician before, during and after the program,
> including all blood tests and medication adjustments.

## 📄 License

MIT
