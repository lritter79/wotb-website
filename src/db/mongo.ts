import mongoose from "mongoose";
import { MONGO_URL } from "$env/static/private";
export async function start_mongo(): Promise<void> {
  console.log(`>>>Starting mongo...`);
  try {
    await mongoose.connect(MONGO_URL);
  } catch (err) {
    console.log(`>>>There was an error starting mongo: ${err}`);
  }
}
