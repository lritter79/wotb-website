type LinkInfo = {
  id: number;
  link: string;
  linkText: string;
  icon: any;
};

interface Address {
  houseNumber: string;
  streetName: string;
  zipcode: string;
  city: string;
  state: string;
}

interface Show {
  venueName: string;
  address?: Address;
  otherBands?: string[];
  entryTime?: Date;
  startTime: Date;
  ticketLink?: string;
}
