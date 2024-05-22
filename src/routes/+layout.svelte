<script lang="ts">
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "../lib/Menu.svelte";
  let open: boolean = false; //this is for the hamburger menu
  import "./app.css";
  import { fade } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import Logo from "../lib/Logo.svelte";

  export let data;
</script>

<main class="app">
  <SvelteToast />
  <div id="container">
    <Logo />
    <div id="hamburger-positioner">
      <Hamburger --color="white" bind:open />
    </div>
    <Menu bind:open />
    <div class="content">
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
    position: absolute;
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
