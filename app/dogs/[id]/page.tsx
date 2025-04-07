import { getDogById } from "@/app/actions/actions";
import PageNotFound from "@/app/components/PageNotFound";
import {
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

type PageProps = { params: { id: string } };

export default async function DogDetail({ params }: PageProps) {
  const dog = await getDogById(Number(params.id));
  if (!dog) {
    return (
      <main>
        <PageNotFound />
      </main>
    );
  }
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={dog.name}
            src={dog.image || undefined}
            /* objectFit="cover"
            boxSize="100%" */
            fit={"cover"}
            align={"center"}
            w={"100%"}
            /*  h={{ base: "100%", sm: "75%" }} */
          />
        </Flex>
        <Stack
          spacing={{ base: 4, md: 6 }}
          mt={4}
          fontSize={{ base: "20", lg: "23" }}
          divider={<StackDivider />}
          /*  overflow="hidden" */
        >
          <HStack>
            <Heading size={{ base: "md", lg: "lg" }}>Name: </Heading>

            <Text>{dog.name}</Text>
          </HStack>

          <HStack>
            <Heading size={{ base: "md", lg: "lg" }}>Breed: </Heading>

            <Text>{dog.breed}</Text>
          </HStack>

          <HStack>
            <Heading size={{ base: "md", lg: "lg" }}>Age: </Heading>

            <Text>{dog.age}</Text>
          </HStack>

          <HStack>
            <Heading size={{ base: "md", lg: "lg" }}>Vaccinated: </Heading>

            <Text>{dog.isVaccinated ? "Yes" : "No"}</Text>
          </HStack>
          <HStack>
            <Heading size={{ base: "md", lg: "lg" }}>Neutered: </Heading>

            <Text>{dog.neutered ? "Yes" : "No"}</Text>
          </HStack>
          <HStack>
            <Heading size={{ base: "md", lg: "lg" }}>Checked In:</Heading>
            <Checkbox
              size="lg"
              colorScheme="green"
              isChecked={dog.isCheckedIn}
            />

            {/* <Heading size={{ base: "md", lg: "lg" }}>Checked in: </Heading>

            <Text>{dog.isCheckedIn ? "Yes" : "No"}</Text> */}
          </HStack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
