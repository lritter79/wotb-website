<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
  import { onMount } from "svelte";
  //   import { copyToClipboard } from "your-copy-clipboard-library"; // Replace with your preferred library or implementation
  import Fa from "svelte-fa";

  export let link: string;
  export let linkText: string;
  export let icon: IconDefinition; // Replace 'any' with the actual type of your icon component

  let isCopied = false;

  onMount(() => {
    // Your initialization code, if needed
  });

  const handleCopy = () => {
    //copyToClipboard(linkText);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 1500); // Reset copied state after 1.5 seconds
  };
</script>

<div class="link-container w-96 lg:min-w-96">
  <div class="link-container-black p-0.5">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <div class="icon">
        <Fa {icon} />
      </div>
      {linkText}
    </a>
    <button on:click={handleCopy} class="copy-button">
      <!-- <div class="copy-icon"> {/* Add your copy icon here */}</div> -->
      <!-- <div class="tooltip">Copy to Clipboard</div> -->
    </button>
  </div>
</div>

<style>
  .link-container {
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    background-color: black;
    color: white;
    border: 1px solid white;
  }

  .link-container:hover {
    transform: scale(1.05);
  }

  .icon {
    margin-right: 10px;
  }

  .copy-button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
  }

  .copy-icon {
    /* Use your preferred copy icon styles */
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

  .copy-button:hover .tooltip {
    opacity: 1;
  }
</style>
