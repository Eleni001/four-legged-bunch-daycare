"use client";

import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
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
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.breed) newErrors.breed = "Breed is required";
    if (!formData.age || isNaN(Number(formData.age)))
      newErrors.age = "Age must be a number";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    updateDog({ ...formData, id: dog.id });
    router.push(`/dogs/${dog.id}`);
    //console.log("Submitted:", formData);
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
          <FormControl isInvalid={!!errors.name}>
            <HStack>
              <FormLabel fontSize={{ base: "lg", lg: "xl" }}>Name:</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                data-cy="dog-name"
              />
            </HStack>
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.breed}>
            <HStack>
              <FormLabel fontSize={{ base: "lg", lg: "xl" }}>Breed:</FormLabel>
              <Input
                name="breed"
                value={formData.breed}
                onChange={handleChange}
              />
            </HStack>
            <FormErrorMessage>{errors.breed}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.age}>
            <HStack>
              <FormLabel fontSize={{ base: "lg", lg: "xl" }}>Age:</FormLabel>
              <Input name="age" value={formData.age} onChange={handleChange} />
            </HStack>
            <FormErrorMessage>{errors.age}</FormErrorMessage>
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
                isChecked={formData.neutered}
                name="neutered"
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
