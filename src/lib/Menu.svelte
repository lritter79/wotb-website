<script lang="ts">
  import { fly, scale, fade } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  export let open = false;
</script>

{#if open}
  <div
    id="menu"
    role="menu"
    class="pl-0 pr-0"
    transition:fade={{ duration: 500 }}
  >
    <div id="link-container">
      {#each ["watch", "gallery", "listen", "follow"] as link, i}
        <a
          on:click={() => {
            open = false;
            const element = document.getElementById(link);
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          href={`#`}
          role="menuitem"
          transition:fly={{ y: -15, delay: 50 * i }}
        >
          {link.toUpperCase()}
        </a>
      {/each}
    </div>

    <hr
      transition:scale={{
        duration: 750,
        easing: quadOut,
        opacity: 1,
      }}
    />
  </div>
{/if}

<style>
  #menu {
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    padding: 1em;
    padding-top: 0;
    color: #eef;
  }
  #link-container {
    display: flex;
    flex-direction: column;
  }
  a {
    cursor: pointer;
    width: max-content;
    margin: 1rem auto;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
