<script lang="ts">
  export let size: IconSize = "3x";
  export let isAbsolute: boolean = true;
  import musicServices from "../data/musicLink.json";
  import IconGridItem from "./IconGridItem.svelte";
  import type { IconSize } from "svelte-fa";
  import {
    musicIconsDictionary,
    socialsIconsDictionary,
    visibleSocials,
  } from "./socials";
</script>

<footer
  class={`grid grid-cols-6 gap-1 place-items-center p-2 w-full ${isAbsolute ? "absolute bottom-0`" : ""}`}
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
</footer>
