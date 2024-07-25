import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema({
  venueName: {
    type: String,
    required: true,
  },
  address: {
    houseNumber: { type: String },
    streetName: { type: String },
    zipcode: { type: String },
    city: { type: String },
    state: { type: String },
  },
  otherBands: { type: [String] },
  entryTime: {
    type: Date,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: false,
  },
  timezone: String,
  payout: Number,
  notes: String,
  ticketLine: String,
  fbLink: String,
});

export const Show = mongoose.model("wotb_shows", ShowSchema);
