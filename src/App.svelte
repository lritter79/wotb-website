<script lang="ts">
  import LinkBox from "./lib/LinkBox.svelte";
  import SpotifyIcon from "./lib/icons/SpotifyIcon.svelte";
  import socials from "./data/socialLinks.json";
  import type { SvelteComponent } from "svelte";
  interface ComponentDictionary {
    [key: number]: typeof SvelteComponent;
    // Add more entries as needed
  }
  let componentDictionary: ComponentDictionary = {
    0: SpotifyIcon,
    // Add more entries as needed
  };
</script>

<main>
  <h1 class="text-5xl">Wake of The Blade</h1>
  <br />
  <h1 class="text-4xl">Shows</h1>
  <h1 class="text-4xl">Music</h1>
  <h2 class="text-4xl">Social Media</h2>
  {#each socials as social (social)}
    <LinkBox
      link={social.link}
      linkText={social.linkText}
      icon={Number(social.id) in componentDictionary
        ? componentDictionary[Number(social.id)]
        : null}
    />
  {/each}
</main>
