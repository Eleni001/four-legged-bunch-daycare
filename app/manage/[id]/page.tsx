import { getDogById } from "@/app/actions/actions";
import DogForm from "@/app/components/DogForm";
import PageNotFound from "@/app/components/PageNotFound";


type PageProps = { params: { id: string } };

export default async function Dashboard({ params }: PageProps) {
  const dog = await getDogById(Number(params.id));
  if (!dog) {
    return (
      <main>
        <PageNotFound />
      </main>
    );
  }
  return <DogForm dog={dog} />;
}
