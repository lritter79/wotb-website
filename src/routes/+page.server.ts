import { shows as showsTable } from "$db/shows";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  //console.log(`>>>load`);
  const data = await showsTable
    .find({ startTime: { $gte: new Date() } })
    .toArray();
  //console.log(`data`, data);
  const returnData = JSON.stringify(data);
  return {
    shows: returnData,
  };
};
