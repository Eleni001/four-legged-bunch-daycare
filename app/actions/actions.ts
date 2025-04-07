"use server";

import { db } from "@/prisma/db";

export const getAllDogs = async () => {
  const dogs = await db.dog.findMany({ include: { owner: true } });
  return dogs;
};

export const getDogById = async (id: number) => {
  return await db.dog.findUnique({ where: { id: id } });
};

export const setDogCheckedIn = async (id: number, checkedIn: boolean) => {
  return await db.dog.update({
    where: { id: id },
    data: { isCheckedIn: checkedIn },
  });
};
