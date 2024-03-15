import React from "react";
import { Box, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" backgroundColor="whiteAlpha.100" backdropFilter="blur(10px)">
      <Icon as={icon} w={10} h={10} mb={4} />
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={20}>
        <Box>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} color="white">
            Connect with{" "}
            <Text as={"span"} color={"purple.400"}>
              Verbatim
            </Text>
          </Heading>
          <Text color={"gray.400"} fontSize={"lg"} mt={4}>
            Verbatim is the next-generation social platform that puts you in control. Share your thoughts, engage in meaningful discussions, and build a community around your passions.
          </Text>
          <Button size="lg" colorScheme="purple" mt="24px" fontWeight="bold" fontSize="md" px={6}>
            Join Now
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMG1vY2t1cCUyMG9uJTIwcGhvbmV8ZW58MHx8fHwxNzEwNDg2MTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Verbatim App" borderRadius={"md"} boxShadow="2xl" />
      </SimpleGrid>

      <Box py={20}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Verbatim Features
          </Heading>
          <Text fontSize="lg" color={"gray.400"}>
            Discover what makes Verbatim stand out from the rest
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={12}>
          <Feature icon={FaTwitter} title={"Microblogging"} text={"Share your thoughts, ideas, and experiences in short, engaging posts."} />
          <Feature icon={FaFacebook} title={"Private Groups"} text={"Create invite-only spaces to discuss shared interests with like-minded individuals."} />
          <Feature icon={FaInstagram} title={"Rich Media"} text={"Express yourself with images, videos, and audio alongside your text posts."} />
        </SimpleGrid>
      </Box>

      <Box bgImage="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMDQ4NjEzOXww&ixlib=rb-4.0.3&q=80&w=1080" py={20} bgSize="cover" bgPosition="center" borderRadius="lg" overflow="hidden" position="relative">
        <Box bgColor="blackAlpha.700" position="absolute" top={0} left={0} w="100%" h="100%" />
        <VStack spacing={6} textAlign="center" zIndex={1} position="relative" color="white">
          <Heading fontSize="4xl">Ready to Join Verbatim?</Heading>
          <Text fontSize="xl" maxW="md">
            Sign up now and start connecting with people who share your passions.
          </Text>
          <Button size="lg" colorScheme="purple">
            Get Started
          </Button>
        </VStack>
      </Box>

      <HStack justifyContent="center" spacing={4} my={10}>
        <Icon as={FaTwitter} w={6} h={6} color="gray.400" />
        <Icon as={FaFacebook} w={6} h={6} color="gray.400" />
        <Icon as={FaInstagram} w={6} h={6} color="gray.400" />
      </HStack>
    </Container>
  );
};

export default Index;
