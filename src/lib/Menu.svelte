<script lang="ts">
  import { fly, scale, fade } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import SocialsGrid from "./SocialsGrid.svelte";
  import Logo from "./Logo.svelte";
  export let open = false;
</script>

{#if open}
  <div id="menu" role="menu" transition:fade={{ duration: 500 }}>
    <div class="flex flex-col h-full">
      <Logo />
      <div>
        <div id="link-container">
          <a
            on:click={() => {
              open = false;
            }}
            href="/"
          >
            HOME
          </a>
          <a
            on:click={() => {
              open = false;
            }}
            href="/gallery"
          >
            GALLERY
          </a>

          <a
            on:click={() => {
              open = false;
            }}
            href="/about"
          >
            ABOUT
          </a>
        </div>
        <div class="pl-10 pr-10">
          <hr
            transition:scale={{
              duration: 750,
              easing: quadOut,
              opacity: 1,
            }}
          />
        </div>
      </div>

      <div class="h-full">
        <SocialsGrid size="lg" />
      </div>
    </div>
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
    padding-top: 0;
    color: #eef;
    height: 100vh;
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
