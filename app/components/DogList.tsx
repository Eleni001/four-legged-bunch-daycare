import { Box, Heading, Image } from "@chakra-ui/react";
import { Dog } from "@prisma/client";

interface Props {
  dogs: Dog[];
}

export function DogList(props: Props) {
  return (
    <Box>
      {props.dogs.map((dog) => (
        <Box>
          <Heading>{dog.name}</Heading>
          <Image src={dog.image || undefined} />
        </Box>
      ))}
    </Box>
  );
}
