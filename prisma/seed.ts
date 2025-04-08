import { db } from "./db";

async function main() {
  await db.owner.deleteMany();
  await db.owner.create({
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
            image: "https://media.istockphoto.com/id/802317706/photo/sweet-dog-schnautzer.webp?b=1&s=170667a&w=0&k=20&c=q3UjzWFtub-Jrp_3JVEdnaJ7t2O1eWRifEI4Jcbnlkc=",
            isVaccinated: true,
            neutered: false,
          },
        ],
      },
    },
  });
  await db.owner.create({
    data: {
      name: "Eva Peterson",
      email: "eva.petersson@mail.com",
      phone: "0738075982",
      dogs: {
        create: [
          {
            name: "Tore",
            breed: "Tax",
            age: 7,
            image: "https://images.unsplash.com/photo-1605638868237-0660a05a135b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVaccinated: true,
            neutered: false,
          },
        ],
      },
    },
  });
  await db.owner.create({
    data: {
      name: "Tomas Davidsson",
      email: "tomas.davidsson@mail.com",
      phone: "0729453728",
      dogs: {
        create: [
          {
            name: "Pixy",
            breed: "Miniture Poodle",
            age: 2,
            image: "https://images.unsplash.com/photo-1645097140485-ccf3d61d60d5?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVaccinated: true,
            neutered: true,
            isCheckedIn: true
          },
        ],
      },
    },
  });
  await db.owner.create({
    data: {
      name: "Mats Karlsson",
      email: "mats.karlsson@mail.com",
      phone: "0749231235",
      dogs: {
        create: [
          {
            name: "Della",
            breed: "Miniture Schnauzer",
            age: 5,
            image: "https://images.unsplash.com/photo-1642546007057-6f4c6e6e2b34?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVaccinated: true,
            neutered: false,
          },
        ],
      },
    },
  });
  await db.owner.create({
    data: {
      name: "Hanna Knutsson",
      email: "hanna.knutsson@mail.com",
      phone: "0729803676",
      dogs: {
        create: [
          {
            name: "Buster",
            breed: "French bulldog",
            age: 2,
            image: "https://images.unsplash.com/photo-1582656400825-71c718be1584?q=80&w=3062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVaccinated: true,
            neutered: true,
          },
        ],
      },
    },
  });
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
