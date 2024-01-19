<script>
  // You can replace the placeholder URL with the actual image source
  const imageUrl = "https://via.placeholder.com/100";

  // Style for the circle with a deep crimson drop shadow
</script>

<div class="circle">
  <img class="image" src={imageUrl} alt="Circle Image" />
</div>

<style>
  .circle {
    /* Apply the circleStyle object as inline styles */
    width: 100px;
    margin: 0 auto;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(220, 20, 60, 0.6);
    overflow: hidden; /* Ensure the image doesn't overflow the circle */
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the entire circle */
  }
</style>
