Onkar Yaglewad — Portfolio project context and instructions

Name: Onkar Yaglewad
Role: Product Engineer
Project: Portfolio website (onkaryaglewad.com)

Tech stack chosen: Astro with Svelte/React islands

Overview and rationale
- Astro (with Svelte/React islands)
  - Pros: Minimal JS by default, pick tiny hydratable islands where you need animation. Use Svelte islands for micro-interactions; use Rive for complex animated vectors. Best trade-off for heavy animation, tiny baseline.
  - Cons: Slightly more architectural planning required; you’ll orchestrate where scripts load.
  - Verdict: Best for your “very animated but very lightweight” brief.

Animation tools: which to use where (guidance)
- Rive — Best for interactive vector animations/state machines. Tiny player, GPU-accelerated, super smooth. Use for logos, hero micro-interactions, interactive UI widgets.
- Lottie — Best for playback of AE exports. Small, great for pre-rendered vector sequences (load once, play). Good for hero micro-animations and icons.
- Framer Motion — Best for React complex UI transitions (layout, exit/enter, gestures). Great DX but heavier than pure CSS or Svelte motions.
- GSAP — Best for extremely complex timelines and scroll-sync. Very powerful but heavier; use only when you truly need timeline control.
- CSS (transforms + opacity) — Always preferred for basic micro interactions. GPU-accelerated and zero JS when possible. Use for hover, focus, simple transitions.
- WebGL / Three.js — Powerful but heavy. Use sparingly for hero visual effects only if you have serious perf budget and fallback options.

Practical rules to guarantee snappy performance (must-follow)
- Only hydrate what must move. Use static HTML everywhere else (Astro does this by default).
- Prefer transforms & opacity — never animate layout metrics (width/height/top/left).
- Use vector animation players (Rive/Lottie) for complex motion; they’re small and GPU-friendly.
- Limit concurrent animations in the viewport — keep active animated elements under ~6-10.
- Throttle scroll & pointer-driven animations (use requestAnimationFrame, but libraries like Rive handle this well).
- Use intersection observers to lazy-activate animations when in view, and pause/remove when out of view.
- Respect prefers-reduced-motion: provide simpler/no animations for OS users and lower-power devices.
- Use CDN-optimized images + AVIF/WebP and lazy-load non-critical visuals.
- Avoid big bundle spikes — split per route and per island.
- Profile on real slow devices (WebPageTest, Lighthouse on throttling, Firefox profiler) — optimize until happy on 3G/low CPU tests.

How to structure the site (conceptual guidance)
- Static HTML hero with background image + SVG overlay for visuals.
- Hero animation player (Rive/Lottie) as a hydratable island — only that component gets JS.
- Small Svelte islands for interactive widgets; everything else is static.
- Separate heavy visual scenes (if any) into lazy-loaded chunks that only execute when user interacts.
- Minimal global JS runtime — no big SPA boilerplate unless required.

Preferred stack (ordered)
1. Astro + Svelte islands + Rive/Lottie — best compromise: buttery animations + tiny runtime
2. Use Astro as the shell and Svelte components (islands) for each animated piece.
3. Drive vector animations with Rive, and use Lottie for non-interactive playback.
4. Only use Framer/GSAP in isolated islands when a specific interaction needs it.

Notes for AI builders / future automation
- Keep the default output static and include tiny islands for interactive/animated elements.
- When generating code, prefer Svelte for micro-interactions due to smaller runtime and ergonomics.
- Include checks for prefers-reduced-motion and device memory / user agent heuristics before starting heavy animations.

Placeholders & next steps for development
- Replace placeholder URLs in the Svelte islands (`.riv` and `.json` paths) with real assets.
- Add optimized images in `public/` (AVIF/WebP) and SVG overlays for hero.
- Add analytics/perf monitoring and run Lighthouse on throttled devices.

