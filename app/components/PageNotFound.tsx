"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bg="RGBA(88, 129, 87)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2} color="RGBA(52, 78, 65)">
        Page Not Found
      </Text>
      <Text color="RGBA(163, 177, 138)" mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <NextLink href="/">
        <Button
          colorScheme="teal"
          bg="RGBA(88, 129, 87)"
          color="RGBA(218, 215, 205)"
          _hover={{ bg: "RGBA(163, 177, 138)", color: "RGBA(52, 78, 65)" }}
          variant="solid"
        >
          Go to Home
        </Button>
      </NextLink>
    </Box>
  );
}
