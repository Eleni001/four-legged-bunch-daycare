"use client";

import { deleteDog, setDogCheckedIn } from "@/app/actions/actions";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Dog } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  dog: Dog;
}

export default function DogDetail({ dog }: Props) {
  const [checkedIn, setCheckedIn] = useState(dog.isCheckedIn);
  const [dogDeleted, setDogDeleted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setDogCheckedIn(dog.id, checkedIn);
  }, [checkedIn]);

  useEffect(() => {
    if (dogDeleted) {
      deleteDog(dog.id);
      router.push("/");
    }
  }, [dogDeleted]);

  const handleDeleteClick = () => {
    setDogDeleted(true);
  };

  return (
    <Container maxW={"7xl"}>
      <Box display="flex" justifyContent="right">
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
            mt={6}
            data-cy="manage-dog"
          >
            <Text
              paddingTop={4}
              fontSize={{ base: "xl", lg: "3xl" }}
              color="darkgreen"
              textDecor="underline"
            >
              Manage Dog
            </Text>
          </MenuButton>
          <MenuList>
            <MenuItem as="a" href={`product/${dog.id}`}>
              <Button colorScheme="green" flexGrow={1}>
                Edit
              </Button>
            </MenuItem>
            <MenuItem as="div" onClick={() => handleDeleteClick()}>
              <Button colorScheme="red" flexGrow={1} data-cy="delete-button">
                Delete
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 14, md: 20 }}
        data-cy={"dog-detail" + dog.name}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={dog.name}
            src={dog.image || undefined}
            fit={"cover"}
            align={"center"}
            w={"100%"}
          />
        </Flex>
        <Stack
          spacing={{ base: 4, md: 6 }}
          mt={4}
          fontSize={{ base: "20", lg: "23" }}
          divider={<StackDivider />}
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
              isChecked={checkedIn}
              onChange={(e) => setCheckedIn(!!e.target.checked)}
              data-cy="check-box"
            />
          </HStack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
