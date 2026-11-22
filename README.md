# Potfolio — Onovo Godwin Prosperity

A production-quality, Dockerised **React 3D portfolio** for Onovo Godwin Prosperity — Frontend Engineer (React, Next.js, TypeScript), founder of Cavalcade Tech Ltd, ethical hacker and mentor.

Live product: [speedreporters.com](https://speedreporters.com) · GitHub: [onovogodwinprosperity](https://github.com/onovogodwinprosperity) · LinkedIn: [onovogodwinprosperity](https://www.linkedin.com/in/onovogodwinprosperity)

## Highlights

- **Interactive 3D hero** — Three.js / React Three Fiber: floating geometric shapes and a particle field that react to the mouse, with slow auto-rotation. Respects `prefers-reduced-motion` (static fallback) and degrades gracefully to a 2D gradient if WebGL is unavailable. The canvas is lazy-loaded so it never blocks first paint.
- **Live GitHub Explorer** — fetches public repos from the GitHub API with search, language filter and sort (stars / updated / name). Falls back to a verified curated snapshot if the API is rate-limited or offline.
- **Honest content** — every fact (experience, metrics, projects, certifications) comes from one data file, `src/data/portfolio.ts`. No invented testimonials, clients or employers. Private-codebase projects are labelled "Private codebase — walkthrough on request".
- **SEO-ready** — Open Graph / Twitter cards, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`, semantic HTML, alt text and visible focus states.
- **Dockerised** — multi-stage build, nginx serving the static bundle with SPA fallback, gzip, cache and security headers, healthcheck, and a Compose file for one-command runs.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + Vite 8 + TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Animation | Framer Motion (scroll reveals) |
| Serving | nginx:alpine (multi-stage Docker build) |
| CI | GitHub Actions (build + docker build) |

## Local development

```bash
npm install
npm run dev        # Vite dev server (HMR) — http://localhost:5173
npm run build      # Type-check + production build into dist/
npm run preview    # Serve the production build locally
```

## Docker

```bash
# Build and run with Compose (serves on http://localhost:8080)
docker compose up --build -d

# Or build and run the image directly
docker build -t potfolio .
docker run -d --name potfolio -p 8080:80 potfolio
```

The image is a two-stage build: `node:20-alpine` compiles the app, then `nginx:alpine` serves `dist/` as a non-root user with a healthcheck (`wget --spider http://localhost/`).

## Deployment notes

- **Any static host** (Vercel, Netlify, Cloudflare Pages): `npm run build`, publish `dist/`. The app is a single-page app with hash-free anchor navigation, so no rewrites are required — but the included `nginx.conf` covers SPA fallback for self-hosted deploys.
- **Google Cloud Run**: build the image and deploy it the same way as any container — `gcloud run deploy potfolio --image <image> --port 80 --allow-unauthenticated`. The container listens on port 80 and exposes a health endpoint via `/` (healthcheck in the Dockerfile).
- **VPS / VM**: `docker compose up -d` behind your reverse proxy of choice; the Compose file maps host port `8080` to container port `80`.

## Project structure

```
potfolio/
├── Dockerfile                 # Multi-stage: node build → nginx serve
├── docker-compose.yml         # One-command run (8080:80)
├── nginx.conf                 # SPA fallback, gzip, cache + security headers
├── .dockerignore / .gitignore
├── .github/workflows/ci.yml   # Build + docker build on push/PR to main
├── public/
│   ├── images/godwin.webp     # Portrait (tech office at night)
│   ├── Onovo_Godwin_Prosperity_CV.pdf
│   ├── robots.txt / sitemap.xml / favicon.svg
├── src/
│   ├── data/portfolio.ts      # ★ Single source of truth for ALL content
│   ├── components/
│   │   ├── HeroScene.tsx      # Three.js 3D hero (lazy-loaded)
│   │   ├── Hero.tsx           # Hero + stats + WebGL/reduced-motion handling
│   │   ├── Navbar.tsx         # Sticky nav + mobile menu
│   │   ├── About.tsx / Projects.tsx / GitHubExplorer.tsx
│   │   ├── Experience.tsx / Skills.tsx / Certifications.tsx
│   │   ├── Services.tsx / Contact.tsx / Footer.tsx
│   │   ├── Reveal.tsx         # Framer Motion scroll reveal
│   │   ├── ErrorBoundary.tsx  # WebGL-failure fallback boundary
│   │   └── icons.tsx          # Inline SVG icon set
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Tailwind v4 theme + glass/gradient utilities
└── index.html                 # SEO meta, OG/Twitter cards, JSON-LD
```

## Updating content

Edit **only** `src/data/portfolio.ts` — profile, socials, stats, projects, experience, skills, certifications and services all live there, and every component renders from it. To update the CV, replace `public/Onovo_Godwin_Prosperity_CV.pdf` (keep the filename, or update `cvPath` in the data file).

## Credits

- Design & build: Onovo Godwin Prosperity (with Muse)
- Portrait: Godwin, in a tech office at night
- Fonts: Space Grotesk + Inter (Google Fonts, system-font fallback)
