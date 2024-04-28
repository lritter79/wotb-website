<script lang="ts">
  import Stack from "../../lib/Stack.svelte";
  import Show from "../../lib/Show/Show.svelte";
  import type { Show as ShowType } from "../../lib/types/types";
  export let data: { shows: string };
  console.log("about - data", data);
  let shows: ShowType[] = JSON.parse(data.shows);
  const pastShows = shows;
</script>

<svelte:head>
  <title>About</title>
  <meta
    name="Wake of the Blade"
    content="Wake of the Blade - About"
  />
</svelte:head>

<section>
  <div
    class="border-2 border-white-500 flex justify-center flex-col items-center p-3 my-9 mx-10 lg:mx-20 shadow-sm bg-black"
  >
    <h1 class="text-2xl">About</h1>
    <p>
      In a world of blackened doom, Wake of the Blade cuts through the
      shit. Based out of Pittsburgh, PA, each member has spent
      countless years honing their grim craft. Their songs reach both
      technical, virtuosic highs and barren, minimal lows. A true
      chimera of a band, they meld death, doom, black, and progressive
      metal in a way that few would dare.
    </p>
  </div>
  <div
    class="flex justify-center flex-col items-center p-3 my-9 mx-10 lg:mx-20"
  >
    <h2 class="text-2xl">Past Shows</h2>

    <Stack spacing={1}>
      {#each pastShows as show (show)}
        <Show {show} />
      {/each}</Stack
    >
  </div>
</section>

<style>
</style>
