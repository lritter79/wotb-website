import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type LinkInfo = {
  id: number;
  link: string;
  linkText: string;
  icon: any;
};

export interface Address {
  houseNumber: string;
  streetName: string;
  zipcode: string;
  city: string;
  state: string;
}

export interface Show {
  venueName: string;
  address?: Address;
  otherBands?: string[];
  entryTime?: string;
  startTime: string;
  endTime?: string;
  timezone: string;
  ticketLink?: string;
  rvspLink?: string;
  isPast?: boolean;
  fbLink?: string;
}

export interface ComponentDictionary {
  [key: number]: IconDefinition;
  // Add more entries as needed
}
