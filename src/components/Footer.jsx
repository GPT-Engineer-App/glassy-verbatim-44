import React from "react";
import { Box, Container, Stack, Text, Link, useColorModeValue, SimpleGrid, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} mb={8}>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Product
            </Text>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Tutorials</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Follow Us
            </Text>
            <Link href={"#"}>Instagram</Link>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          &copy; {new Date().getFullYear()} Verbatim. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
