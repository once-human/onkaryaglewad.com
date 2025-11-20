onkaryaglewad.com — Astro + Svelte/React islands starter

Quick start

1) Install dependencies

```bash
npm install
```

2) Run dev server

```bash
npm run dev
```

What I scaffolded
- `astro.config.mjs` — Astro config with Svelte and React integrations.
- `package.json` — scripts and basic dependencies.
- `src/pages/index.astro` — entry page using small hydratable islands.
- `src/layouts/BaseLayout.astro` — minimal HTML shell.
- `src/components/RiveIsland.svelte` — example Svelte island (placeholder to initialize Rive client-side).
- `src/components/LottieIsland.svelte` — example Svelte island for Lottie playback.
- `src/components/AnimatedReact.jsx` — example React island for isolated widgets.
- `INSTRUCTIONS.md` — full project context & guidance for AI builders (includes animation rules and stack rationale).

Notes
- This is a starter scaffold. Replace placeholder asset URLs (Rive and Lottie) with your real assets.
- Respect `prefers-reduced-motion` and lazy-init heavy visuals.
- When you add Framer Motion or GSAP, keep them inside islands to avoid raising global bundle size.

Next steps (recommended)
- Run `npm install`.
- Update `INSTRUCTIONS.md` with any more personal preferences and add real animation assets.
- Optionally configure a CDN for large assets and add an image optimization strategy.
