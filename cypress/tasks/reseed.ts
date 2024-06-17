import { db } from "../../prisma/db";

export async function reseed() {
  // NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
  if (process.env.NODE_ENV !== "test") return;

  await db.owner.deleteMany({});

  await db.owner.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 2,
      name: "Eva Petersson",
      email: "eva.petersson@mail.se",
      phone: "073456789",
    },
  });

  return null;
}
