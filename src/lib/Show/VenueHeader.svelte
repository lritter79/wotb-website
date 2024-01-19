<script lang="ts">
  import { extractTimeFromISO } from "../../functions";
  export let entryTime: string | undefined;
  export let startTime: string;
  export let venueName: string;
</script>

{#if entryTime}
  <h2 class="text-md sm:text-xl">
    {venueName}{" @ "}{extractTimeFromISO(entryTime)}
  </h2>
{:else}
  <h2 class="text-md sm:text-xl">
    {venueName}{" @ "}{extractTimeFromISO(startTime)}
  </h2>
{/if}

<style>
  /* Add your styling here */
</style>
