"use client";

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Dog } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateDog } from "../actions/actions";

interface Props {
  dog: Dog;
}

export default function DogForm({ dog }: Props) {
  const [formData, setFormData] = useState(dog);
  const router = useRouter();
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleBooleanChange = (e: {
    target: { name: string; checked: boolean };
  }) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateDog({ ...formData, id: dog.id });
    router.push(`/dogs/${dog.id}`);
    console.log("Submitted:", formData);
  };

  return (
    <SimpleGrid
      display="flex"
      justifyContent="center"
      spacing={{ base: 8, md: 10 }}
      py={{ base: 14, md: 20 }}
      px={4}
    >
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={{ base: 4, md: 6 }}
          mt={4}
          fontSize={{ base: "20", lg: "23" }}
        >
          <Heading textAlign="center">You are now Editing {dog.name}</Heading>
          <FormControl>
            <HStack>
              <FormLabel fontSize={{ base: "lg", lg: "xl" }}>Name:</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                data-cy="dog-name"
              />
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel fontSize={{ base: "lg", lg: "xl" }}>Breed:</FormLabel>
              <Input
                name="breed"
                value={formData.breed}
                onChange={handleChange}
              />
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel fontSize={{ base: "lg", lg: "xl" }}>Age:</FormLabel>
              <Input name="age" value={formData.age} onChange={handleChange} />
            </HStack>
          </FormControl>
          <FormControl>
            {" "}
            <HStack>
              <FormLabel size="lg">Vaccinated:</FormLabel>
              <Checkbox
                isChecked={formData.isVaccinated}
                name="isVaccinated"
                onChange={handleBooleanChange}
              />
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel size="lg">Neutered:</FormLabel>
              <Checkbox
                isChecked={formData.isVaccinated}
                name="isNeutered"
                onChange={handleBooleanChange}
              />
            </HStack>
          </FormControl>
          <FormControl>
            <HStack>
              <FormLabel size="lg">Checked In:</FormLabel>
              <Checkbox
                isChecked={formData.isCheckedIn}
                name="isCheckedIn"
                onChange={handleBooleanChange}
              />
            </HStack>
            <Button
              colorScheme="green"
              width="full"
              type="submit"
              data-cy="submit-button"
            >
              Save
            </Button>
          </FormControl>
        </Stack>
      </form>
    </SimpleGrid>
  );
}
