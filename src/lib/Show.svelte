<script lang="ts">
  import type Show from "../types";
  export let show: Show;
  import Fa from "svelte-fa";
  import { faDirections } from "@fortawesome/free-solid-svg-icons";
  import LinkButton from "./LinkButton.svelte";

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
    const month = dateObject
      .toLocaleString("default", {
        month: "long",
      })
      .substring(0, 3)
      .toLocaleUpperCase();
    const year = dateObject.getFullYear();
    const weekDay = dateObject
      .toLocaleString("default", { weekday: "long" })
      .substring(0, 3)
      .toLocaleUpperCase();

    const formattedDate = `${month} ${day} ${weekDay}`;

    return formattedDate;
  }
</script>

<div
  class="show-card flex flex-col sm:flex-row sm:justify-between bg-black text-white border border-white border-solid p-2 w-64 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3"
>
  <div class="info-container text-left pr-2">
    <h3>{extractDateFromISO(show.entryTime)}</h3>
    <h2 class="text-md sm:text-xl">
      {show.venueName}{" @ "}{extractTimeFromISO(show.entryTime)}
    </h2>
    <h4>
      {#if show.otherBands && show.otherBands.length > 0}
        w/ {show.otherBands.join(", ")}
      {/if}
    </h4>
    <div class="flex items-center">
      <h2 class="mr-2">
        {show.address.city}, {show.address.state}
      </h2>
      <a
        href={`https://www.google.com/maps/search/${show.address.houseNumber}+${show.address.streetName}+${show.address.zipcode}+${show.address.city}+${show.address.state}`}
        target="_blank"
      >
        <Fa icon={faDirections} />
      </a>
    </div>
  </div>
  <div class="button-container flex flex-col justify-around">
    {#if show.ticketLink}
      <LinkButton link="https://www.google.com" linkText="Tickets" />
    {/if}
    {#if show.rvspLink}
      <LinkButton link="https://www.google.com" linkText="RVSP" />
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
