import React from "react";
import { Box, Flex, Text, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.800")} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("purple.500", "purple.300")}>
          Verbatim
        </Text>

        <Stack direction="row" spacing={8} alignItems="center">
          <Button as={Link} to="/login" variant="ghost" fontSize="lg">
            Sign In
          </Button>
          <Button
            as={Link}
            to="/signup"
            fontSize="lg"
            fontWeight="bold"
            color="white"
            bg="purple.500"
            _hover={{
              bg: "purple.600",
            }}
            px={8}
            py={6}
            rounded="full"
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
