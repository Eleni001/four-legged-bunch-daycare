"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const logo = "Four legged bunch";

export default function Navbar() {
  return (
    <Box bg="rgb(218, 215, 205)" px={4} color="rgb(52, 78, 65)">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <NextLink href="/">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textDecor="none"
              borderRadius="md"
            >
              {logo}
            </Text>
          </NextLink>
        </HStack>
        <Flex alignItems={"center"}></Flex>
      </Flex>
    </Box>
  );
}
