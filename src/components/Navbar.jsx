import React, { useState } from "react";
import { Box, Flex, Text, Button, Stack, useColorModeValue, IconButton, Collapse, VStack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box bg={useColorModeValue("white", "gray.800")} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("red.500", "red.500")}>
          PELPA
        </Text>
        <Flex>
          <IconButton icon={colorMode === "light" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} variant="ghost" aria-label="Toggle color mode" mr={4} />
          <IconButton icon={<FaBars />} onClick={() => setShowMenu(!showMenu)} variant="outline" aria-label="Open Menu" />
        </Flex>
      </Flex>
      <Collapse in={showMenu}>
        <VStack align="start" p={4} spacing={4} bg={useColorModeValue("white", "gray.800")}>
          <Button as={Link} to="/blog" variant="ghost">
            Blog
          </Button>
          <Button as={Link} to="/prompts" variant="ghost">
            Prompts
          </Button>
          <Button as={Link} to="/categories" variant="ghost">
            Categories
          </Button>
          <Flex justify="center" w="full">
            <Button as={Link} to="/login" variant="ghost" mr={2}>
              Login
            </Button>
            <Button as={Link} to="/signup" bg="red.500" color="white" _hover={{ bg: "red.600" }}>
              Sign Up
            </Button>
          </Flex>
        </VStack>
      </Collapse>
      <Progress size='xs' isIndeterminate />
    </Box>
  );
};

export default Navbar;
