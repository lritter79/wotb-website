<script lang="ts">
  import WakeOfTheBlade from "$lib/images/wakeoftheBlade-white.png";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { Hamburger } from "svelte-hamburgers";
  import LogoCircle from "../lib/LogoCircle.svelte";
  import Menu from "../lib/Menu.svelte";
  let open: boolean = false; //this is for the hamburger menu
  let hasLogo = false;
  import "./app.css";
  import { fade } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";

  export let data;
</script>

<main class="app">
  <SvelteToast />
  <div id="container">
    <div id="hamburger-positioner">
      <Hamburger --color="white" bind:open />
    </div>
    <Menu bind:open />
    <div class="content">
      {#if hasLogo}
        <LogoCircle />
      {/if}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        class="py-5 px-12"
        id="mainImage"
        src={WakeOfTheBlade}
        alt="Circle Image"
      />
      {#key data.pathname}
        <div
          in:fade={{ easing: cubicIn, duration: 500, delay: 500 }}
          out:fade={{ easing: cubicOut, duration: 499 }}
        >
          <slot />
        </div>
      {/key}
    </div>
  </div>
</main>

<style>
  #container {
    min-height: 100vh;
  }
  footer {
    background-color: black;
    z-index: 99;
    position: relative;
  }
  #hamburger-positioner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .section-anchor {
    scroll-behavior: smooth !important;
  }

  :global(.custom) {
    border: 1px outset white;
  }
</style>
