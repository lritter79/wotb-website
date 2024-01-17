<script lang="ts">
  import LinkBox from "./lib/LinkBox.svelte";
  import socials from "./data/socialLinks.json";
  import musicServices from "./data/musicLinks.json";
  import Stack from "./lib/Stack.svelte";

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
</script>

<main>
  <h1 class="text-5xl">Wake of The Blade</h1>
  <br />
  <h2 class="text-4xl">Shows</h2>
  <h2 class="text-4xl">Music</h2>
  <Stack spacing={1}>
    {#each musicServices as musicService (musicService)}
      <LinkBox
        link={musicService.link}
        linkText={musicService.linkText}
        icon={musicIconsDictionary[Number(musicService.id)]}
      />
    {/each}
  </Stack>

  <h2 class="text-4xl">Social Media</h2>
  <Stack spacing={1}>
    {#each socials as social (social)}
      <LinkBox
        link={social.link}
        linkText={social.linkText}
        icon={socialsIconsDictionary[Number(social.id)]}
      />
    {/each}
  </Stack>
</main>
