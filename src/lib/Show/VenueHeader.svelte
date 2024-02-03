<script lang="ts">
  import { extractTimeFromISO } from "../../functions";
  export let entryTime: string | undefined;
  export let startTime: string;
  export let venueName: string;
</script>

{#if entryTime}
  <h2 class="text-sm md:text-base">
    {venueName}{" @ "}{extractTimeFromISO(entryTime)}
  </h2>
{:else}
  <h2 class="text-sm md:text-base">
    {venueName}{" @ "}{extractTimeFromISO(startTime)}
  </h2>
{/if}

<style>
  /* Add your styling here */
</style>
