import React from "react";
import { Box, Heading, Text, Button, VStack, Image, Container, SimpleGrid, Flex, Spacer } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Feature = ({ title, text, image }) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" py={20}>
      <MotionBox w={{ base: "100%", md: "50%" }} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Image src={image} alt={title} borderRadius="lg" boxShadow="xl" />
      </MotionBox>
      <Spacer />
      <MotionBox w={{ base: "100%", md: "40%" }} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Heading fontSize="4xl" mb={4}>
          {title}
        </Heading>
        <Text fontSize="xl" color="gray.500">
          {text}
        </Text>
      </MotionBox>
    </Flex>
  );
};

const Index = () => {
  return (
    <>
      <Navbar />
      <Container maxW="7xl" py={28}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} alignItems="center">
          <MotionBox initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Heading fontSize={{ base: "4xl", md: "6xl" }} mb={6}>
              Connect with{" "}
              <Text as="span" color="purple.500">
                Verbatim
              </Text>
            </Heading>
            <Text fontSize="2xl" color="gray.500" mb={8}>
              The next-generation social platform that puts you in control. Share your thoughts, engage in meaningful discussions, and build a community around your passions.
            </Text>
            <Button size="lg" colorScheme="purple" px={8}>
              Join Now
            </Button>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMG1vY2t1cCUyMG9uJTIwcGhvbmV8ZW58MHx8fHwxNzEwNDg2MTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Verbatim App" borderRadius="2xl" boxShadow="2xl" />
          </MotionBox>
        </SimpleGrid>

        <VStack spacing={20} mt={40}>
          <Feature title="Microblogging" text="Share your thoughts, ideas, and experiences in short, engaging posts." image="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaWNyb2Jsb2dnaW5nfGVufDB8fHx8MTcxMDQ4NjE0MHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Feature title="Private Groups" text="Create invite-only spaces to discuss shared interests with like-minded individuals." image="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwZ3JvdXBzfGVufDB8fHx8MTcxMDQ4NjE0MHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Feature title="Rich Media" text="Express yourself with images, videos, and audio alongside your text posts." image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyaWNoJTIwbWVkaWF8ZW58MHx8fHwxNzEwNDg2MTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </VStack>

        <Box py={40}>
          <VStack spacing={8} textAlign="center">
            <Heading fontSize="5xl">Ready to Join Verbatim?</Heading>
            <Text fontSize="2xl" maxW="2xl" mx="auto" color="gray.500">
              Sign up now and start connecting with people who share your passions.
            </Text>
            <Button size="lg" colorScheme="purple" px={12} py={8} fontSize="xl">
              Get Started
            </Button>
          </VStack>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
