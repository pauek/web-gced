import { db } from "./db";

export async function dbAlumniGetAllCardsInfo() {
  // TODO: Sort by date
  const alumni = await db.alumni.findMany({
    include: {
      masters: {
        include: { master: { select: { name: true } } },
      },
    },
  });
  return alumni.map((alumni) => ({
    ...alumni,
    masters: alumni.masters.map((master) => ({ name: master.master.name })),
  }));
}

export type AlumniCardInfo = Awaited<
  ReturnType<typeof dbAlumniGetAllCardsInfo>
>[number];
