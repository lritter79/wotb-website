<script lang="ts">
  import type { Show } from "../types/types";
  export let show: Show;
  console.log(show);
  const isPast = new Date(show.startTime) < new Date();
  import { extractDateFromISO, getEventConfig } from "../functions";
  import Fa from "svelte-fa";
  import "add-to-calendar-button";
  import { atcb_action } from "add-to-calendar-button";
  import {
    faDirections,
    faCalendarPlus,
  } from "@fortawesome/free-solid-svg-icons";
  import LinkButton from "../LinkButton.svelte";
  import Button from "../Button.svelte";
  import VenueHeader from "./VenueHeader.svelte";

  const config = getEventConfig(show);
</script>

<div
  class="show-card flex flex-col sm:flex-row sm:justify-between bg-black text-white border border-white border-outset p-2 w-64 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 shadow-lg"
>
  <div class="info-container text-left pr-2">
    <div class="flex items-center">
      {#if show.entryTime}
        <h3 class="mr-2 text-base">
          {extractDateFromISO(show.entryTime)}
        </h3>
      {:else}
        <h3 class="mr-2 text-base">
          {extractDateFromISO(show.startTime)}
        </h3>
      {/if}
      {#if show.address}
        <h2 class="mr-2 text-base">
          {show.address.city}, {show.address.state}
        </h2>
        <a
          href={`https://www.google.com/maps/search/${show.address.houseNumber}+${show.address.streetName}+${show.address.zipcode}+${show.address.city}+${show.address.state}`}
          target="_blank"
        >
          <Fa icon={faDirections} />
        </a>
      {/if}
    </div>
    {#if show?.ticketLink && !isPast}
      <a
        href={show.ticketLink}
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        <VenueHeader
          entryTime={show.entryTime}
          startTime={show.startTime}
          venueName={show.venueName}
        /></a
      >
    {:else}
      <VenueHeader
        entryTime={show.entryTime}
        startTime={show.startTime}
        venueName={show.venueName}
      />
    {/if}

    <h4 class="text-sm md:text-md">
      {#if show.otherBands && show.otherBands.length > 0}
        w/ {show.otherBands.join(", ")}
      {/if}
    </h4>
  </div>
  {#if !isPast}
    <div class="button-container flex flex-col justify-around">
      {#if show?.ticketLink}
        <LinkButton link={show.ticketLink} linkText="Tickets" />
      {/if}
      {#if show?.fbLink}
        <LinkButton link={show.fbLink} linkText="RVSP" />
      {/if}
      <Button
        icon={faCalendarPlus}
        onClick={() => atcb_action(config)}
      />
    </div>
  {/if}
</div>

<style>
  /* Tailwind CSS classes for styling */
  .show-card {
    border-width: 1px;
    /* Add any additional styling as needed */
  }
</style>
