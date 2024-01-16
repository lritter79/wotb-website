<script lang="ts">
  import LinkBox from "./lib/LinkBox.svelte";
  import socials from "./data/socialLinks.json";
  import {
    faSpotify,
    type IconDefinition,
  } from "@fortawesome/free-brands-svg-icons";
  import type { SvelteComponent } from "svelte";
  interface ComponentDictionary {
    [key: number]: IconDefinition;
    // Add more entries as needed
  }
  let componentDictionary: ComponentDictionary = {
    0: faSpotify,
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
      icon={componentDictionary[Number(social.id)]}
    />
  {/each}
</main>
