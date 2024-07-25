<script lang="ts">
  export let size: IconSize = "3x";
  export let isAbsolute: boolean = true;
  import socials from "../lib/data/socialLinks.json";
  import musicServices from "../lib/data/musicLink.json";
  import IconGridItem from "../lib/IconGridItem.svelte";
  import type { ComponentDictionary } from "../lib/types/types";
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
  import type { IconSize } from "svelte-fa";

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
  let visibleSocials = socials.slice(0, 3);
</script>

<div
  class={`grid grid-cols-6 gap-1 place-items-center pt-4 p-2 w-full${isAbsolute ? " absolute bottom-0" : ""}`}
>
  {#each musicServices as musicService (musicService)}
    <IconGridItem
      {size}
      link={musicService.link}
      icon={musicIconsDictionary[Number(musicService.id)]}
    />
  {/each}
  {#each visibleSocials as social (social)}
    <IconGridItem
      {size}
      link={social.link}
      icon={socialsIconsDictionary[Number(social.id)]}
    />
  {/each}
</div>
