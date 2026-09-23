# Haider Ali — Portfolio

A modern single-page portfolio built with **React + TypeScript + Vite + Tailwind CSS v4**.
Light/dark theme, responsive, and intentionally minimal on animation.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into /dist
npm run preview  # preview the production build locally
```

## Editing content

All site content lives in **`src/data.ts`** — profile, skills, experience, projects,
education, and contact details. Edit that one file to update the site; no component
changes needed.

## Replacing the profile photo

A placeholder lives at `public/profile.svg`. Drop your own image into `public/`
(e.g. `public/profile.jpg`) and update `profile.photo` in `src/data.ts` to match.
If the image is missing at runtime, the hero falls back to a generated avatar.

## Resume

The CV is served from `public/Haider_Ali_786_Resume.pdf` and linked by the
"Download CV" button. Replace that file to update it.

## Structure

```
src/
  data.ts            # single source of truth for all content
  App.tsx            # layout + theme state
  index.css          # Tailwind + theme tokens
  components/        # Nav, Hero, About, Skills, Experience, Projects, Contact, Footer
```

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Build with
`npm run build` and serve the `dist/` folder.
```bash
npm run build
```
