<script lang="ts">
  import { scale, fade } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import Logo from "./Logo.svelte";
  import SocialsMenuFooter from "./Socials/SocialsMenuFooter.svelte";
  export let open = false;
</script>

{#if open}
  <div id="menu" role="menu" transition:fade={{ duration: 500 }}>
    <div class="flex flex-col h-full">
      <Logo />
      <section>
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
      </section>

      <div class="h-full relative">
        <SocialsMenuFooter isAbsolute={true} size="2.5x" />
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
    padding-top: 0;
    color: #eef;
    height: 100vh;
  }
  #link-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.15em;
  }
  #link-container > a {
    cursor: pointer;
    width: max-content;
    margin: 1rem auto;
  }
  #link-container > a:hover {
    text-decoration: underline;
  }
</style>
