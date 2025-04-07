import { Box, Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Dog } from "@prisma/client";
import NextLink from "next/link";
import DogCard from "./DogCard";

interface Props {
  dogs: Dog[];
}

export function DogList(props: Props) {
  return (
    <Box>
      <Heading textAlign="center" m={8}>
        List of all registed dogs
      </Heading>
      <SimpleGrid
        width="85%"
        m="2rem auto"
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={5}
      >
        {props.dogs.map((dog) => (
          <GridItem
            key={dog.id}
            boxShadow="1px 1px 2px rgba(0,0,0,0.1)"
            transition={"transform 0.2s ease-in-out"}
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
          >
            <Flex
              flexDirection="column"
              height="100%"
              bg="RGBA(163, 177, 138)"
              borderRadius={8}
            >
              <DogCard dog={dog} />
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
