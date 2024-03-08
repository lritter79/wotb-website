<script lang="ts">
  import Carousel from "svelte-carousel";
  import Gallery1 from "../../assets/wotb_1.jpg";
  import Gallery2 from "../../assets/wotb_2.jpg";
  import Gallery3 from "../../assets/wotb_3.jpg";
  import Gallery4 from "../../assets/wotb_4.jpg";
  import Gallery5 from "../../assets/wotb_5.jpg";
  import Gallery6 from "../../assets/wotb_6.jpg";
  let images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
  ];
</script>

<a id="gallery" class="section-anchor"> </a>
<Carousel dots={true} pauseOnFocus={true} arrows={true} let:loaded>
  {#each images as src, imageIndex (src)}
    <div class="img-container">
      {#if loaded.includes(imageIndex)}
        <img {src} alt={`Wake of the Blade ${imageIndex}`} />
      {/if}
    </div>
  {/each}
</Carousel>

<style>
  .img-container {
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .img-container img {
    height: 100%;
    width: 100%;
  }
</style>
