<script lang="ts">
  import Stack from "../lib/Stack.svelte";
  import Show from "../lib/Show/Show.svelte";
  import type { Show as ShowType } from "../lib/types/types";
  import LinkBox from "./../lib/LinkBox.svelte";
  import socials from "../lib/data/socialLinks.json";
  import musicServices from "../lib/data/musicLink.json";
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
  export let data: { shows: string };
  let shows: ShowType[] = JSON.parse(data.shows);
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
  <a id="watch" class="section-anchor">
    <h2 class="text-2xl">Upcoming Shows</h2>
  </a>
  <Stack spacing={1}>
    {#each upcomingShows as show (show)}
      <Show {show} />
    {/each}</Stack
  >
  <a id="listen" class="section-anchor">
    <h2 class="text-2xl">Listen</h2>
  </a>

  <Stack spacing={1}>
    <div class="flex items-center justify-center p-1">
      <!-- svelte-ignore a11y-missing-attribute -->
      <iframe
        style="border: 0; width: 100%; height: 120px;"
        src="https://bandcamp.com/EmbeddedPlayer/album=4199763080/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
        seamless
        ><a
          href="https://wakeoftheblade.bandcamp.com/album/the-flesh-ephemeral-ep"
          >The Flesh Ephemeral EP by Wake Of The Blade</a
        ></iframe
      >
    </div>
    {#each musicServices as musicService (musicService)}
      <LinkBox
        link={musicService.link}
        linkText={musicService.linkText}
        icon={musicIconsDictionary[Number(musicService.id)]}
      />
    {/each}
  </Stack>
  <a id="follow" class="section-anchor">
    <h2 class="text-2xl">Follow</h2>
  </a>

  <Stack spacing={1}>
    {#each socials as social (social)}
      <LinkBox
        link={social.link}
        linkText={social.linkText}
        icon={socialsIconsDictionary[Number(social.id)]}
      />
    {/each}
  </Stack>
</section>

<style>
  .section-anchor {
    text-align: center;
  }

  h2 {
    font-family: "OptimusPrincepsSemiBold";
    text-shadow: 2px 2px #dc143cb3;
    position: relative;
  }

  h2:before {
    content: "⚔";
    text-shadow: 2px 2px #dc143cb3;

    color: white;
  }

  h2:after {
    content: "⚔";
    text-shadow: 2px 2px #dc143cb3;

    color: white;
  }
</style>
