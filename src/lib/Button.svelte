<script lang="ts">
  import Fa from "svelte-fa";
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
  export let text = "";
  export let icon: IconDefinition; // Replace 'any' with the actual type of your icon component
  export let onClick = () => {
    return;
  };
</script>

<button class="button" on:click={onClick}>
  {#if text !== ""}
    {text}
  {/if}
  {#if icon}
    <div class="icon">
      <Fa {icon} />
    </div>
  {/if}
</button>

<style>
  .button {
    @apply bg-white text-black border border-solid border-black px-4 py-2 rounded shadow-md flex justify-center items-center;
    transition: background-color 0.3s;
  }

  .button:hover {
    @apply bg-gray-200;
  }
</style>
