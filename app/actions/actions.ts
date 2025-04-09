"use server";

import { db } from "@/prisma/db";
import { Dog } from "@prisma/client";

export const getAllDogs = async () => {
  const dogs = await db.dog.findMany({ include: { owner: true } });
  return dogs;
};

export const getDogById = async (id: number) => {
  return await db.dog.findUnique({ where: { id: id } });
};

export const setDogCheckedIn = async (id: number, checkedIn: boolean) => {
  await db.dog.update({
    where: { id: id },
    data: { isCheckedIn: checkedIn },
  });
};

export const updateDog = async (dog: Dog) => {
  await db.dog.update({
    where: { id: dog.id },
    data: dog,
  });
};

export const deleteDog = async (id: number) => {
  await db.dog.delete({
    where: {
      id: id,
    },
  });
};
