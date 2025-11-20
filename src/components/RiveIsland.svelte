<script>
  import { onMount, onDestroy } from 'svelte';
  let container;
  let riveInstance = null;

  onMount(async () => {
    // This is a placeholder demonstrating where you'd initialize Rive.
    // Example: import('rive-js').then(({ Rive }) => { ... })
    // We avoid importing rive-js server-side; do it client-side only when this island hydrates.

    const { Rive } = await import('rive-js');
    // A minimal placeholder Rive setup — replace `riveData` with your .riv URL/ArrayBuffer
    try {
      riveInstance = new Rive({
        src: 'https://example.com/placeholder.riv',
        canvas: document.createElement('canvas'),
        autoplay: true,
      });
      container.appendChild(riveInstance.canvas);
    } catch (e) {
      // If you don't yet have a .riv file, render a friendly fallback
      container.innerHTML = '<div style="padding:1rem;background:#f0f0f0">Rive placeholder — add your .riv file and tweak this component.</div>';
    }
  });

  onDestroy(() => {
    if (riveInstance && riveInstance.stop) riveInstance.stop();
  });
</script>

<div bind:this={container} aria-hidden="true"></div>
