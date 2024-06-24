import { db } from "@/prisma/db";

export const getAllDogs = async () => {
  const dogs = await db.dog.findMany({ include: { owner: true } });
  return dogs;
};
