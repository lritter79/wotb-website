<script lang="ts">
  import socials from "../lib/data/socialLinks.json";
  import musicServices from "../lib/data/musicLink.json";
  import Stack from "../lib/Stack.svelte";
  import Show from "../lib/Show/Show.svelte";
  import shows from "../lib/data/shows.json";
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
  import IconGridItem from "../lib/IconGridItem.svelte";
  import type { ComponentDictionary } from "../lib/types/types";

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

  const upcomingShows = shows.filter((show) => {
    let presentDate = new Date().getTime();
    let showDate = new Date(show.startTime).getTime();
    return showDate > presentDate;
  });
</script>

<svelte:head>
  <title>Wake of the Blade</title>
  <meta name="description" content="Wake of the Blade" />
</svelte:head>

<section>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <a id="watch" class="section-anchor">
    <div class="items-center justify-center flex">
      <h2 class="sm:text-base md:text-2xl">Upcoming Shows</h2>
    </div>
  </a>
  <Stack spacing={1}>
    {#each upcomingShows as show (show)}
      <Show {show} />
    {/each}</Stack
  >
  <a id="listen" class="section-anchor"> </a>
  <div class="grid grid-cols-3 gap-4 place-items-center pt-4 p-2">
    {#each musicServices as musicService (musicService)}
      <IconGridItem
        linkText={musicService.linkText}
        link={musicService.link}
        icon={musicIconsDictionary[Number(musicService.id)]}
      />
    {/each}
  </div>
  <a id="follow" class="section-anchor"> </a>
  <div class="grid grid-cols-3 gap-4 place-items-center">
    {#each socials as social (social)}
      <IconGridItem
        linkText={social.linkText}
        link={social.link}
        icon={socialsIconsDictionary[Number(social.id)]}
      />
    {/each}
  </div>
</section>

<style>
</style>
