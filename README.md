# CSE Variant Picker

An unofficial quiz app for TU Delft CSE first-year students to figure out whether **Data**, **Multimedia**, or **Systems** is their best Year 2 variant match.

## Live demo
Link: https://variant-picker.vercel.app/

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com), sign in, click **Add New Project**
3. Import the repo — Vercel auto-detects Next.js, no config needed
4. Click **Deploy** — done, you get a public URL instantly

## Deploy via CLI

```bash
npm install -g vercel
vercel          # follow the prompts, deploys in ~30 seconds
```

## Structure

```
src/
  data/questions.ts       # all 12 questions + scoring weights + variant info
  components/
    Quiz.tsx              # main state machine (intro → quiz → results)
    QuestionCard.tsx      # single question UI
    ResultsCard.tsx       # percentage breakdown + course links
    Disclaimer.tsx        # reusable disclaimer banner
  app/
    page.tsx              # root page
    layout.tsx            # font + metadata
```

## Disclaimer

This tool is **not** affiliated with or endorsed by TU Delft. For fun only.  
Always register your actual variant preference at [projectforum.tudelft.nl](https://projectforum.tudelft.nl) by **June 1st 23:59**.
