import { getDogById } from "@/app/actions/actions";
import DogDetail from "@/app/components/DogDetail";
import PageNotFound from "@/app/components/PageNotFound";

type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {
  const dog = await getDogById(Number(params.id));
  if (!dog) {
    return (
      <main>
        <PageNotFound />
      </main>
    );
  }

  return <DogDetail dog={dog} />;
}
