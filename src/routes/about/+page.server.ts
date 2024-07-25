import { Show } from "$db/shows";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  console.log(`>>>load - about`);
  // const data = await showsTable
  //   .find({
  //     startTime: { $lt: new Date() },
  //   })
  //   .limit(50)
  //   .toArray();
  const data = await Show.find()
    .where("startTime")
    .lt(new Date())
    .limit(50)
    .exec();
  console.log(`data - about`, data);
  const returnData = JSON.stringify(data);
  return {
    shows: returnData,
  };
};
