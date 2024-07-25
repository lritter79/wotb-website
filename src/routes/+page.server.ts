import { Show } from "$db/shows";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  //console.log(`>>>load`);
  // const data = await showsTable
  //   .find({ startTime: { $gte: new Date() } })
  //   .toArray();
  const data = await Show.find()
    .where("startTime")
    .gte(new Date())
    .exec();
  console.log(`data`, data);
  const returnData = JSON.stringify(data);
  return {
    shows: returnData,
  };
};
