import React, { useState } from "react";
import { Box, Flex, Text, Button, Stack, useColorModeValue, IconButton, Collapse, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box bg={useColorModeValue("white", "gray.800")} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
        <IconButton icon={<FaBars />} onClick={() => setShowMenu(!showMenu)} variant="outline" aria-label="Open Menu" />
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("purple.500", "purple.300")}>
          Verbatim
        </Text>
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
          <Button as={Link} to="/login" variant="ghost">
            Sign In
          </Button>
          <Button as={Link} to="/signup" bg="purple.500" color="white" _hover={{ bg: "purple.600" }}>
            Sign Up
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
