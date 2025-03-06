import { Box, Heading, Text, Link, VStack, HStack, Input, Textarea, Button, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Contact Sal's Pizza
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/pizza-restaurant" 
          alt="Sal's Pizza Restaurant" 
          width="100%" 
          height="200px" 
          objectFit="cover"
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Sal's Pizza</Text>
          <Text>4767 Tilghman St, Allentown, PA 18104, USA</Text>
          <Text>Phone: <Link href="tel:+16103957211">(610) 395-7211</Link></Text>
          <Text>Email: <Link href="mailto:contact@salspizza.com">contact@salspizza.com</Link></Text>
        </Box>

        <HStack justify="center" spacing={4}>
          <IconButton as={Link} href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton as={Link} href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>

        <Box as="form">
          <VStack spacing={4}>
            <Input placeholder="Your Name" size="lg" />
            <Input type="email" placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="red" size="lg">Send Message</Button>
          </VStack>
        </Box>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/sals-pizza/location-map" 
          alt="Sal's Pizza Location Map" 
          width="100%" 
          height="300px" 
          objectFit="cover"
          borderRadius="md"
        />

        <HStack justify="center" spacing={6}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/visit">Visit</Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;