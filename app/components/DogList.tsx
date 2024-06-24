import { Box, Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Dog } from "@prisma/client";

interface Props {
  dogs: Dog[];
}

export function DogList(props: Props) {
  return (
    <Box>
      <SimpleGrid
        id="products-grid"
        width="80%"
        m="2rem auto"
        mt="5rem"
        columns={{ base: 1, md: 3, lg: 4 }}
        gap={5}
      >
        {props.dogs.map((dog) => (
          <GridItem
            key={dog.id}
            boxShadow="1px 1px 2px rgba(0,0,0,0.1)"
            transition={"transform 0.2s ease-in-out"}
            _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
          >
            <Flex flexDirection="column" height="100%">
              <Box _hover={{ textDecoration: "none" }}>
                <Image
                  src={dog.image || undefined}
                  alt={dog.name}
                  objectFit="cover"
                  width="100%"
                  height="200px"
                />
                <Flex
                  justifyContent="flex-start"
                  alignContent="center"
                  flexDirection="column"
                  mt="1.5rem"
                >
                  <Text
                    fontWeight="semibold"
                    textTransform="capitalize"
                    _hover={{ color: "brown" }}
                  >
                    {dog.name}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
