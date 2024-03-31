<script lang="ts">
  import Stack from "../lib/Stack.svelte";
  import Show from "../lib/Show/Show.svelte";
  import shows from "../lib/data/shows.json";
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
  <div class="flex items-center justify-center p-1">
    <iframe
      title="bandcamp-widget"
      style="border: 0; width: 300px; height: 420px;"
      src="https://bandcamp.com/EmbeddedPlayer/album=4199763080/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/"
      seamless
      ><a
        href="https://wakeoftheblade.bandcamp.com/album/the-flesh-ephemeral-ep"
        >The Flesh Ephemeral EP by Wake Of The Blade</a
      ></iframe
    >
  </div>

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
</section>

<style>
</style>
