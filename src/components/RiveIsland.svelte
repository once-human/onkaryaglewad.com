<script>
  import { onMount, onDestroy } from 'svelte';
  let container;
  let riveInstance = null;

  onMount(async () => {
    // Lazy-import Rive at runtime. Use @vite-ignore so Vite doesn't pre-bundle if the package
    // is not installed yet. If you prefer a specific Rive package, install it (or replace this import).
    try {
      const pkg = 'rive-js';
      const mod = await import(/* @vite-ignore */ pkg);
      const { Rive } = mod;
      riveInstance = new Rive({
        src: 'https://example.com/placeholder.riv',
        canvas: document.createElement('canvas'),
        autoplay: true,
      });
      container.appendChild(riveInstance.canvas);
    } catch (e) {
      // Graceful fallback if the package isn't installed or import fails
      container.innerHTML = '<div style="padding:1rem;background:#f0f0f0">Rive placeholder — install a Rive package or update this component.</div>';
      console.warn('Rive import failed or not installed:', e);
    }
  });

  onDestroy(() => {
    if (riveInstance && riveInstance.stop) riveInstance.stop();
  });
</script>

<div bind:this={container} aria-hidden="true"></div>
