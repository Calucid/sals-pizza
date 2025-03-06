import { Box, Heading, Text, Image, VStack, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} textAlign="center">
        <Image
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/logo"
          alt="Sal's Pizza Logo"
          boxSize="150px"
        />
        <Heading as="h1" size="2xl" color="red.600">
          About Sal's Pizza
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Welcome to Sal's Pizza, your go-to spot for authentic, delicious pizza in Allentown, PA. 
          We take pride in using the freshest ingredients and traditional recipes to bring you the best pizza experience.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/pizza-making"
          alt="Making Pizza"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Heading as="h2" size="xl" color="green.600">
          Our Story
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Sal's Pizza has been serving the community for years, offering a warm and welcoming atmosphere for families, 
          friends, and pizza lovers alike. Our passion for pizza drives us to create mouthwatering flavors that keep our customers coming back.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/restaurant-interior"
          alt="Restaurant Interior"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Heading as="h2" size="xl" color="red.600">
          Visit Us
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Stop by and enjoy a slice at our location:
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          4767 Tilghman St, Allentown, PA 18104, USA
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          (610) 395-7211
        </Text>
        <Link as={RouterLink} to="/visit" color="green.500" fontSize="lg" fontWeight="bold">
          Get Directions
        </Link>
        <Image
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/exterior"
          alt="Restaurant Exterior"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Heading as="h2" size="xl" color="green.600">
          Explore Our Menu
        </Heading>
        <Text fontSize="lg" color="gray.700">
          From classic cheese pizzas to specialty gourmet options, we have something for everyone.
        </Text>
        <Link as={RouterLink} to="/menu" color="red.500" fontSize="lg" fontWeight="bold">
          View Menu
        </Link>
      </VStack>
    </Container>
  );
};

export default About;