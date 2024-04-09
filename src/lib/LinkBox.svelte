<script lang="ts">
  import { type IconDefinition } from "@fortawesome/free-brands-svg-icons";
  import { faShare } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  //   import { copyToClipboard } from "your-copy-clipboard-library"; // Replace with your preferred library or implementation
  import Fa from "svelte-fa";
  import { toast } from "@zerodevx/svelte-toast";

  export let link: string;
  export let linkText: string;
  export let icon: IconDefinition; // Replace 'any' with the actual type of your icon component

  let isCopied = false;

  onMount(() => {
    // Your initialization code, if needed
  });

  const handleShare = () => {
    if (navigator.share) {
      const shareData: ShareData = {
        url: link,
      };

      navigator
        .share(shareData)
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(link);
      toast.push("Copied Link To Clipboard", {
        classes: ["custom"],
        theme: {
          "--toastBarHeight": 0,
        },
        initial: 0,
        next: 1,
        duration: 3000,
      });
    }
  };
</script>

<div
  class="link-container w-64 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 shadow-lg"
>
  <div class="link-container-black p-0.5">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="link text-xl md:text-xl lg:text-xl"
    >
      <div class="icon">
        <Fa
          {icon}
          color="white"
          secondaryColor="#dc143ccc"
          style="stroke-width: 10; stroke: #dc143cb3;"
          size="1.5x"
        />
      </div>
      <div class="link-text">{linkText}</div>
    </a>
    <button on:click={handleShare} class="copy-button">
      <Fa icon={faShare} />
    </button>
  </div>
</div>

<style>
  .link-container {
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;
    background-color: black;
    border: 1px outset white;
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    color: white;
  }

  .icon {
    position: absolute;
  }

  .link-text {
    flex-grow: 1; /* Takes up remaining space, centering the text */
    text-align: center;
  }

  .link-container:hover {
    transform: scale(1.05);
  }

  .link-container:focus {
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
