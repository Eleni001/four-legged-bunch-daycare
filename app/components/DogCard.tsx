"use client";

import { Box, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import { Dog } from "@prisma/client";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { setDogCheckedIn } from "../actions/actions";

interface Props {
  dog: Dog;
}

export default function DogCard({ dog }: Props) {
  const [checkedIn, setCheckedIn] = useState(dog.isCheckedIn);

  useEffect(() => {
    setDogCheckedIn(dog.id, checkedIn);
  }, [checkedIn]);

  return (
    <Box _hover={{ textDecoration: "none" }}>
      <NextLink href={`/dogs/${dog.id}`} key={dog.id}>
        <Image
          src={dog.image || undefined}
          alt={dog.name}
          objectFit="cover"
          width="100%"
          height="350"
        />
      </NextLink>
      <Flex
        justifyContent="space-between"
        alignContent="center"
        flexDirection="row"
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
        <Checkbox
          isChecked={checkedIn}
          onChange={(e) => setCheckedIn(!!e.target.checked)}
        />
      </Flex>
    </Box>
  );
}
