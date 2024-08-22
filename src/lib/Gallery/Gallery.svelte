<script lang="ts">
  import Carousel from "svelte-carousel";
  import Gallery1 from "../../lib/images/wotb_1.jpg";
  import Gallery2 from "../../lib/images/wotb_2.jpg";
  import Gallery3 from "../../lib/images/wotb_3.jpg";
  import Gallery4 from "../../lib/images/wotb_4.jpg";
  import Gallery5 from "../../lib/images/wotb_5.jpg";
  import Gallery6 from "../../lib/images/wotb_6.jpg";
  let images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
  ];
  import { browser } from "$app/environment";
</script>

{#if browser}
  <a id="gallery" class="section-anchor"> </a>
  <div class="mx-auto">
    <Carousel
      dots={true}
      pauseOnFocus={true}
      arrows={true}
      let:loaded
    >
      {#each images as src, imageIndex (src)}
        <div class="img-container">
          {#if loaded.includes(imageIndex)}
            <img {src} alt={`Wake of the Blade ${imageIndex}`} />
          {/if}
        </div>
      {/each}
    </Carousel>
  </div>
{/if}

<style>
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    max-height: 693px;
    overflow: hidden; /* Ensure the image doesn't overflow the container */
  }

  .img-container img {
    width: 100%;
    height: auto; /* This ensures the image maintains its aspect ratio */
    display: block; /* Removes any default spacing issues */
  }
</style>
