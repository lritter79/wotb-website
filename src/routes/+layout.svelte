<script lang="ts">
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../lib/Menu.svelte";
  let open: boolean = false; //this is for the hamburger menu
  import "./app.css";
  import { fade, slide } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import Logo from "../lib/Logo.svelte";
  import { OnMount } from "fractils";
  import SocialsMenuFooter from "../lib/Socials/SocialsMenuFooter.svelte";
  export let data;
</script>

<main class="app">
  <SvelteToast />
  <OnMount>
    <div in:fade={{ duration: 1000 }}>
      <Logo />
    </div></OnMount
  >
  <OnMount>
    <div
      in:slide={{ duration: 1000, axis: "x" }}
      id="hamburger-positioner"
    >
      <Hamburger --color="white" bind:open />
    </div>
  </OnMount>
  <Menu bind:open />
  <OnMount>
    <div in:fade={{ duration: 1000 }}>
      <div transition:fade id="container">
        <div id="content">
          {#key data.pathname}
            <section
              in:fade={{ easing: cubicIn, duration: 500, delay: 500 }}
              out:fade={{ easing: cubicOut, duration: 499 }}
            >
              <slot />
            </section>
          {/key}
        </div>
      </div>
      <SocialsMenuFooter size="2.5x" isAbsolute={false} />
    </div>
  </OnMount>
</main>

<style>
  #content {
    min-height: 54vh;
  }

  #hamburger-positioner {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .section-anchor {
    scroll-behavior: smooth;
  }

  :global(.custom) {
    border: 1px outset white;
  }
</style>
