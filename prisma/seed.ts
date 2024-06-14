import { db } from "./db";

async function main() {
  const owner = await db.owner.create({
    data: {
      name: "Eleni Solomon-Samuelsson",
      email: "Eleni.SolomonSamuelsson@medieinstitutet.se",
      phone: "0731234567",
      dogs: {
        create: [
          {
            name: "Oscar Jr.",
            breed: "Miniture Schnauzer",
            age: 4,
            image: "",
            castrated: true,
          },
        ],
      },
    },
  });
  console.log(owner);
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
