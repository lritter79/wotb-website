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

  function extractDateFromISO(isoString) {
    // Create a new Date object from the ISO string
    const dateObject = new Date(isoString);

    // Extract the hours and minutes
    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  }
</script>

<div
  class="show-card bg-black text-white border border-white border-solid p-2 justify-center md:justify-between flex flex-col sm:flex-row w-64 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3"
>
  <div class="text-center md:text-left pr-0 sm:pr-2">
    <h2 class="text-lg md:text-lg sm:text-md">
      {show.venueName}{" "}
      {#if show.otherBands && show.otherBands.length > 0}
        With {show.otherBands.join(", ")}
      {/if}
    </h2>
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
  </div>
  <div class="text-center md:text-left">
    <p>{extractDateFromISO(show.entryTime)}</p>
    <p>Doors: {extractTimeFromISO(show.entryTime)}</p>
    <p>Show: {extractTimeFromISO(show.startTime)}</p>

    {#if show.ticketLink}
      <a href={show.ticketLink} target="_blank">Buy Tickets</a>
    {/if}
  </div>
</div>

<style>
  /* Tailwind CSS classes for styling */
  .show-card {
    border-width: 1px;
    /* Add any additional styling as needed */
  }
</style>
