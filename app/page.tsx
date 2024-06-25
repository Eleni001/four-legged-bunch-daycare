import { getAllDogs } from "./actions/actions";
import { DogList } from "./components/DogList";

export default async function Home() {
  return <DogList dogs={await getAllDogs()} />;
}
