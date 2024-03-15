import React from "react";
import { Box, Container, Stack, Text, Link, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="space-between">
          <Text>&copy; {new Date().getFullYear()} Verbatim. All rights reserved.</Text>
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
