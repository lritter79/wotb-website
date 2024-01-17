import type { ATCBActionEventConfig } from "add-to-calendar-button";
import type { Show } from "./types";
import dayjs from "dayjs";

export function extractTimeFromISO(isoString: string): string {
  const dateObject: dayjs.Dayjs = dayjs(isoString);

  return dateObject.format("hh:mm");
}

export function extractDateFromISO(isoString: string): string {
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

export function getEventConfig(show: Show): ATCBActionEventConfig {
  let name = "Wake of the Blade";
  if (show.otherBands && show.otherBands.length > 0)
    name += ` w/ ${show.otherBands.join(", ")}`;
  let startDateObject: dayjs.Dayjs = dayjs(show.startTime);
  if (show?.entryTime) startDateObject = dayjs(show?.entryTime);
  let endDateObject: dayjs.Dayjs = startDateObject.add(2, "hours");
  if (show?.endTime) endDateObject = dayjs(show.endTime);
  const startDate = startDateObject.format("YYYY-MM-DD");
  const endDate = endDateObject.format("YYYY-MM-DD");
  const startTime = startDateObject.format("HH:mm");
  const endTime = endDateObject.format("HH:mm");
  let location = show.venueName;
  if (show.ticketLink) location = show.ticketLink;
  const config: ATCBActionEventConfig = {
    name,
    description: name,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    options: ["Google", "iCal"],
    timeZone: show.timezone,
  };

  return config;
}
