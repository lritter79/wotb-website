<script lang="ts">
  import WakeOfTheBlade from "$lib/images/wakeoftheBlade-white.png";
  import CopyrightFooter from "../lib/Footer.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { Hamburger } from "svelte-hamburgers";
  import LogoCircle from "../lib/LogoCircle.svelte";
  import Menu from "../lib/Menu.svelte";
  let open: boolean = false; //this is for the hamburger menu
  let hasLogo = false;
  import "./app.css";
</script>

<div class="app">
  <SvelteToast />
  <main>
    <div id="hamburger-positioner">
      <Hamburger --color="white" bind:open />
    </div>
    <Menu bind:open />
    <div>
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
      <slot />
    </div>
  </main>
  <CopyrightFooter />
</div>

<style>
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
