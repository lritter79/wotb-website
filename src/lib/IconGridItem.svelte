<script lang="ts">
  import { type IconDefinition } from "@fortawesome/free-brands-svg-icons";
  //   import { copyToClipboard } from "your-copy-clipboard-library"; // Replace with your preferred library or implementation
  import Fa, { type IconSize } from "svelte-fa";
  export let size: IconSize = "2.5x";
  export let link: string;
  export let linkText: string;
  export let icon: IconDefinition; // Replace 'any' with the actual type of your icon component
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="link p-1"
>
  <div class="icon p-2" role="link">
    <Fa
      {icon}
      color="white"
      secondaryColor="#dc143ccc"
      style="stroke-width: 10; stroke: #dc143cb3;"
      {size}
    />
  </div>
</a>

<style>
  .svelte-fa-base {
  }

  .icon {
    transition: transform 0.3s ease;
    filter: drop-shadow(0px 0px 10px rgba(220, 20, 60, 0.6));
  }

  .icon:hover {
    transform: scale(1.1);
  }

  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
</style>
