<script>
  export let link = "#";
  export let linkText = "Click me";
  export let onClick = () => {
    return;
  };
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="button"
  on:click={onClick}
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
  a {
    text-align: center;
  }
</style>
