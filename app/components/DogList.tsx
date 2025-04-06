import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Dog } from "@prisma/client";
import NextLink from "next/link";

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
              <NextLink href={`/dogs/${dog.id}`} key={dog.id}>
                <Box _hover={{ textDecoration: "none" }}>
                  <Image
                    src={dog.image || undefined}
                    alt={dog.name}
                    objectFit="cover"
                    width="100%"
                    height="350"
                  />
                  <Flex
                    justifyContent="flex-start"
                    alignContent="center"
                    flexDirection="column"
                    m="1.5rem"
                  >
                    <Text
                      fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                      textAlign="center"
                      fontWeight="semibold"
                      textTransform="capitalize"
                    >
                      {dog.name}
                    </Text>
                  </Flex>
                </Box>
              </NextLink>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
