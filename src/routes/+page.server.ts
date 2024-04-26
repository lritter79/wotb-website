import { shows as showsTable } from "$db/shows";
import type { Show } from "../lib/types/types";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  console.log(`>>>load`);
  const data = await showsTable.find().toArray();
  console.log(`data`, data);
  const returnData = JSON.stringify(data);
  return {
    shows: returnData,
  };
};
