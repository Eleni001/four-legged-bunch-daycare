import { Heading } from "@chakra-ui/react";
import { getAllDogs } from "./actions/actions";
import { DogList } from "./components/DogList";

export default async function Home() {
  return (
    <>
      <Heading as="h1">Welcome to Four legged bunch!</Heading>
      <DogList dogs={await getAllDogs()} />
    </>
  );
}
