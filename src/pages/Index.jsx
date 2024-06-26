import { Container, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    // Placeholder for submit action
    console.log("URL submitted for analysis:", url);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Website Analysis Tool</Text>
        <Input 
          placeholder="Enter website URL" 
          value={url} 
          onChange={handleInputChange} 
          size="md" 
        />
        <Button onClick={handleSubmit} colorScheme="teal" size="md">Analyze</Button>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg" overflow="hidden">
          <Text fontSize="lg">Real-time Data Updates</Text>
          {/* Placeholder for real-time data updates */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;