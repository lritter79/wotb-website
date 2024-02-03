<script lang="ts">
  import CopyrightFooter from "./lib/Footer.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";

  import { Hamburger } from "svelte-hamburgers";
  import WakeOfTheBlade from "./assets/wakeoftheBlade-white.png";
  import LinkBox from "./lib/LinkBox.svelte";
  import socials from "./data/socialLinks.json";
  import musicServices from "./data/musicLink.json";
  import Stack from "./lib/Stack.svelte";
  import Show from "./lib/Show/Show.svelte";
  import shows from "./data/shows.json";
  import {
    faSpotify,
    type IconDefinition,
    faBandcamp,
    faApple,
    faFacebook,
    faInstagram,
    faYoutube,
    faTiktok,
    faCreativeCommonsZero,
  } from "@fortawesome/free-brands-svg-icons";
  import LogoCircle from "./lib/LogoCircle.svelte";
  import Menu from "./lib/Menu.svelte";
  import Fa from "svelte-fa";
  import IconGridItem from "./lib/IconGridItem.svelte";
  interface ComponentDictionary {
    [key: number]: IconDefinition;
    // Add more entries as needed
  }
  let socialsIconsDictionary: ComponentDictionary = {
    0: faFacebook,
    1: faInstagram,
    2: faYoutube,
    3: faTiktok,
    4: faCreativeCommonsZero,
  };

  let musicIconsDictionary: ComponentDictionary = {
    0: faSpotify,
    1: faBandcamp,
    2: faApple,
  };

  let open = false; //this is for the hamburger menu
  let hasLogo = false;
</script>

<SvelteToast />
<main>
  <div id="hamburger-positioner">
    <Hamburger --color="white" bind:open />
  </div>
  <Menu bind:open />
  <div class="h-screen">
    {#if hasLogo}
      <LogoCircle />
    {/if}
    <br />

    <img class="image" src={WakeOfTheBlade} alt="Circle Image" />
    <br />
    <a id="watch" class="section-anchor">
      <h2 class="sm:text-base md:text-2xl">Upcoming Shows</h2>
    </a>
    <Stack spacing={1}>
      {#each shows as show (show)}
        <Show {show} />
      {/each}</Stack
    >
    <a id="listen" class="section-anchor"> </a>
    <div class="grid grid-cols-3 gap-4 place-items-center pt-4 p-2">
      {#each musicServices as musicService (musicService)}
        <IconGridItem
          link={musicService.link}
          linkText={musicService.linkText}
          icon={musicIconsDictionary[Number(musicService.id)]}
        />
      {/each}
    </div>
    <a id="follow" class="section-anchor"> </a>
    <div class="grid grid-cols-3 gap-4 place-items-center">
      {#each socials as social (social)}
        <IconGridItem
          link={social.link}
          linkText={social.linkText}
          icon={socialsIconsDictionary[Number(social.id)]}
        />
      {/each}
    </div>
  </div>
</main>
<CopyrightFooter />

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
