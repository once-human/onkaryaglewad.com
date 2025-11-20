<script>
  import { onMount } from 'svelte';
  let container;

  onMount(async () => {
    const lottie = await import('lottie-web');
    try {
      lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // Provide `path` to your exported Lottie JSON file, or replace with `animationData`.
        path: 'https://assets.example.com/placeholder.json'
      });
    } catch (e) {
      container.innerHTML = '<div style="padding:1rem;background:#f8f8f8">Lottie placeholder — add your JSON or path.</div>';
    }
  });
</script>

<div bind:this={container} aria-hidden="true"></div>
