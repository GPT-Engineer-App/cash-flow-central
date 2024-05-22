import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <VStack spacing={4} align="start">
            <Heading size="2xl">Featured Article Headline</Heading>
            <Text fontSize="lg">This is a brief description of the featured article. It provides a summary of the main points and entices readers to click through to read more.</Text>
          </VStack>
        </Container>
      </Box>

      {/* Additional Articles Grid */}
      <Container maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box bg="white" p={6} boxShadow="md">
            <Heading size="md">Article Title 1</Heading>
            <Text mt={4}>Brief description of the article content. This should be engaging and informative.</Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading size="md">Article Title 2</Heading>
            <Text mt={4}>Brief description of the article content. This should be engaging and informative.</Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading size="md">Article Title 3</Heading>
            <Text mt={4}>Brief description of the article content. This should be engaging and informative.</Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading size="md">Article Title 4</Heading>
            <Text mt={4}>Brief description of the article content. This should be engaging and informative.</Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading size="md">Article Title 5</Heading>
            <Text mt={4}>Brief description of the article content. This should be engaging and informative.</Text>
          </Box>
          <Box bg="white" p={6} boxShadow="md">
            <Heading size="md">Article Title 6</Heading>
            <Text mt={4}>Brief description of the article content. This should be engaging and informative.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;