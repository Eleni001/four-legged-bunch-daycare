import { Box, Flex, Image,  Checkbox, Text } from "@chakra-ui/react";
import { Dog } from "@prisma/client";

interface Props{
 dog: Dog;
}

export default function DogCard({dog}: Props) {
  return (
    <Box _hover={{ textDecoration: "none" }}>
      <Image
        src={dog.image || undefined}
        alt={dog.name}
        objectFit="cover"
        width="100%"
        height="350"
      />
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
        <Checkbox size="lg" colorScheme="green" isChecked={dog.isCheckedIn}>
          Checked In
        </Checkbox>
      </Flex>
    </Box>
  );
}
