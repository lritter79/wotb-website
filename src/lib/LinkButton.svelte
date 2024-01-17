<script>
  export let link = "#";
  export let linkText = "Click me";
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="button"
>
  {linkText}
</a>

<style>
  .button {
    @apply bg-white text-black border border-solid border-black px-4 py-2 rounded shadow-md;
    transition: background-color 0.3s;
  }

  .button:hover {
    @apply bg-gray-200;
  }
</style>
