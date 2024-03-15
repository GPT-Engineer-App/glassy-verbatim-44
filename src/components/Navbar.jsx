import React from "react";
import { Box, Flex, Text, Button, Stack, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.2)")} px={4} backdropFilter="blur(10px)">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight="bold" ml="2" color={colorMode === "light" ? "gray.800" : "white"}>
          Verbatim
        </Text>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" aria-label="Toggle dark mode" />
            </motion.div>

            <Button as={Link} to="/login" fontSize={"sm"} fontWeight={400}>
              Sign In
            </Button>
            <Button
              as={Link}
              to="/signup"
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"purple.400"}
              _hover={{
                bg: "purple.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
