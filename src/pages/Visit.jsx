import { Box, Heading, Text, Image, Flex, VStack, Link, Divider } from "@chakra-ui/react";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Visit Sal's Pizza
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/restaurant-exterior" 
          alt="Sal's Pizza Exterior" 
          width="100%" 
          height="300px" 
          objectFit="cover"
        />

        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            4767 Tilghman St, Allentown, PA 18104, USA
          </Text>
          <Text fontSize="lg">(610) 395-7211</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Hours of Operation
          </Heading>
          <Text>Monday - Thursday: 11:00 AM - 10:00 PM</Text>
          <Text>Friday - Saturday: 11:00 AM - 11:00 PM</Text>
          <Text>Sunday: 12:00 PM - 9:00 PM</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Find Us on the Map
          </Heading>
          <Box
            as="iframe"
            width="100%"
            height="300px"
            border="0"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=4767+Tilghman+St,Allentown,PA+18104`}
          />
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Why Visit Us?
          </Heading>
          <Text>
            At Sal's Pizza, we serve the best handmade pizzas with fresh ingredients. Whether you're dining in or taking out, we ensure a great experience for every customer.
          </Text>
        </Box>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/pizza-on-table" 
          alt="Delicious Pizza" 
          width="100%" 
          height="300px" 
          objectFit="cover"
        />

        <Flex justify="center" gap={4} wrap="wrap">
          <Link href="/" fontSize="lg" color="red.500">
            Home
          </Link>
          <Link href="/menu" fontSize="lg" color="red.500">
            Menu
          </Link>
          <Link href="/about" fontSize="lg" color="red.500">
            About Us
          </Link>
          <Link href="/contact" fontSize="lg" color="red.500">
            Contact
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Visit;