import { useState } from "react";
import { Container, VStack, Input, Button, Box, Text } from "@chakra-ui/react";

const Index = () => {
  const [url, setUrl] = useState("");
  const [analysisData, setAnalysisData] = useState(null);

  const handleUrlChange = (e) => setUrl(e.target.value);

  const handleAnalyzeClick = () => {
    // Placeholder for the actual analysis function
    setAnalysisData({
      metrics: "Metrics will be displayed here.",
      charts: "Charts will be displayed here.",
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input
          placeholder="Enter website URL"
          value={url}
          onChange={handleUrlChange}
          size="lg"
        />
        <Button onClick={handleAnalyzeClick} colorScheme="blue" size="lg">
          Analyze
        </Button>
        {analysisData &amp;&amp; (
          <Box width="100%" mt={8} p={4} borderWidth={1} borderRadius="lg">
            <Text fontSize="xl" mb={4}>{analysisData.metrics}</Text>
            <Text fontSize="xl">{analysisData.charts}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;