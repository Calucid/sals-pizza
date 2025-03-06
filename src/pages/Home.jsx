import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/sals-pizza/delicious-pizza')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={6}
      >
        <Stack spacing={6} bg="rgba(0, 0, 0, 0.6)" p={6} borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Welcome to Sal's Pizza</Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Authentic Italian flavors, fresh ingredients, and a passion for pizza.
          </Text>
          <Flex justify="center" gap={4}>
            <Button as={RouterLink} to="/menu" colorScheme="red" size="lg">
              View Menu
            </Button>
            <Button as={RouterLink} to="/visit" colorScheme="green" size="lg">
              Visit Us
            </Button>
          </Flex>
        </Stack>
      </Box>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} p={8} align="center" gap={8}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/pizza-chef"
          alt="Pizza Chef"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box flex="1">
          <Heading fontSize="2xl" mb={4}>Our Story</Heading>
          <Text fontSize="lg">
            Since opening our doors, Sal's Pizza has been dedicated to serving the finest pizza in Allentown, PA.
            Our secret? Fresh ingredients, traditional recipes, and a love for great food.
          </Text>
          <Button as={RouterLink} to="/about" mt={4} colorScheme="red">
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Featured Dishes */}
      <Box p={8} textAlign="center">
        <Heading fontSize="2xl" mb={6}>Our Favorites</Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center">
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/sals-pizza/pepperoni-pizza"
              alt="Pepperoni Pizza"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">Pepperoni Pizza</Text>
          </Box>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/sals-pizza/margherita-pizza"
              alt="Margherita Pizza"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">Margherita Pizza</Text>
          </Box>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/sals-pizza/garlic-knots"
              alt="Garlic Knots"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">Garlic Knots</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" p={8} textAlign="center">
        <Heading fontSize="2xl" mb={4}>Visit Us</Heading>
        <Text fontSize="lg">4767 Tilghman St, Allentown, PA 18104, USA</Text>
        <Text fontSize="lg" mb={4}>(610) 395-7211</Text>
        <Button as={RouterLink} to="/contact" colorScheme="green">
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Home;