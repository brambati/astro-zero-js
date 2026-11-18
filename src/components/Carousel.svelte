<script>
  // Svelte · client:visible (só baixa o JS quando aparece na tela)
  let i = $state(0);
  const slides = ['Sites', 'Apps', 'E-commerce'];
</script>

<div class="island">
  <strong>{slides[i]}</strong>
  <button onclick={() => (i = (i + 1) % slides.length)}>próximo</button>
</div>
