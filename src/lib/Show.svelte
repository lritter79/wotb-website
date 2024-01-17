<script>
  export let show;

  function extractTimeFromISO(isoString) {
    // Create a new Date object from the ISO string
    const dateObject = new Date(isoString);

    // Extract the hours and minutes
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    // Determine whether it's AM or PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Format the time with AM/PM
    const formattedTime = `${formattedHours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${period}`;

    return formattedTime;
  }
</script>

<div
  class="show-card bg-black text-white border-white border-solid border-1"
>
  <h2>{show.venueName}</h2>

  {#if show.address}
    <a
      href={`https://www.google.com/maps/search/${show.address.houseNumber}+${show.address.streetName}+${show.address.zipcode}+${show.address.city}+${show.address.state}`}
      target="_blank"
      class="underline"
    >
      {show.address.houseNumber}
      {show.address.streetName}, {show.address.city}, {show.address
        .state}
      {show.address.zipcode}
    </a>
  {/if}

  {#if show.otherBands && show.otherBands.length > 0}
    <p>With {show.otherBands.join(", ")}</p>
  {/if}

  <p>Doors: {extractTimeFromISO(show.entryTime)}</p>
  <p>Show Time: {extractTimeFromISO(show.startTime)}</p>

  {#if show.ticketLink}
    <a href={show.ticketLink} target="_blank">Buy Tickets</a>
  {/if}
</div>

<style>
  /* Tailwind CSS classes for styling */
  .show-card {
    /* Add any additional styling as needed */
  }
</style>
