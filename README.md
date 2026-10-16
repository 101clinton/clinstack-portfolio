# clinstack-portfolio

My portfolio website — built with Next.js (App Router + TypeScript).

## Get started in VS Code

```bash
git clone https://github.com/101clinton/clinstack-portfolio.git
cd clinstack-portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

All placeholder content lives in one file:

- `lib/data.ts` — name, role, bio, projects, skills, social links, contact email

Update that file, save, and the site updates.

## Structure

- `app/layout.tsx` — page metadata + global layout
- `app/page.tsx` — Hero, About, Projects, Skills, Contact sections
- `app/globals.css` — all styling (no Tailwind, plain CSS)
- `lib/data.ts` — placeholder content to replace with your real info

## Deploy

Push to `main` and deploy on Vercel (import the repo) or GitHub Pages with `next export` / static config. Vercel is the easiest for Next.js.
