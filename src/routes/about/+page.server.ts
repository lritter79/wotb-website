import { shows as showsTable } from "$db/shows";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  console.log(`>>>load - about`);
  const data = await showsTable
    .find({
      startTime: { $lt: new Date() },
    })
    .limit(50)
    .toArray();
  console.log(`data - about`, data);
  const returnData = JSON.stringify(data);
  return {
    shows: returnData,
  };
};
