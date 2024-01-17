<script>
  export let spacing = 4; // You can customize the spacing as needed
</script>

<div class="stack" style="--spacing: {spacing}rem;">
  <!-- Content goes here -->
  <slot />
</div>

<style>
  /* Add additional styles for the stack component */
  .stack {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
    margin: 0 auto; /* Center the entire stack component */
  }

  .stack :global(> *:not(:last-child)) {
    margin-bottom: var(--spacing);
  }
</style>
