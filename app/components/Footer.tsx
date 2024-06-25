"use client";

import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";
import { Links, NavLink, logo } from "./Navbar";

export default function Footer() {
  return (
    <Box bg="rgb(218, 215, 205)" color="rgb(52, 78, 65)">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={2}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Box fontSize="2xl" fontWeight="bold">
          {logo}
        </Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </Container>

      <Box
        pb={8}
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor="rgb(52, 78, 65)"
      >
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          © 2024 by Four legged bunch
        </Text>
      </Box>
    </Box>
  );
}
