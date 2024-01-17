<script lang="ts">
  import * as dayjs from "dayjs";
  import type { Show } from "../types";
  export let show: Show;
  import {
    extractTimeFromISO,
    extractDateFromISO,
    getEventConfig,
  } from "../functions";
  import Fa from "svelte-fa";
  import "add-to-calendar-button";
  import {
    atcb_action,
    type ATCBActionEventConfig,
  } from "add-to-calendar-button";
  import {
    faDirections,
    faCalendarPlus,
  } from "@fortawesome/free-solid-svg-icons";
  import LinkButton from "./LinkButton.svelte";
  import Button from "./Button.svelte";

  const config = getEventConfig(show);
</script>

<div
  class="show-card flex flex-col sm:flex-row sm:justify-between bg-black text-white border border-white border-solid p-2 w-64 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3"
>
  <div class="info-container text-left pr-2">
    <div class="flex items-center">
      <h3 class="mr-2">{extractDateFromISO(show.entryTime)}</h3>

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
    <h2 class="text-md sm:text-xl">
      {show.venueName}{" @ "}{extractTimeFromISO(show.entryTime)}
    </h2>
    <h4>
      {#if show.otherBands && show.otherBands.length > 0}
        w/ {show.otherBands.join(", ")}
      {/if}
    </h4>
  </div>
  <div class="button-container flex flex-col justify-around">
    {#if show.ticketLink}
      <LinkButton link="https://www.google.com" linkText="Tickets" />
    {/if}
    <Button
      icon={faCalendarPlus}
      onClick={() => atcb_action(config)}
    />
  </div>
</div>

<style>
  /* Tailwind CSS classes for styling */
  .show-card {
    border-width: 1px;
    /* Add any additional styling as needed */
  }
</style>
