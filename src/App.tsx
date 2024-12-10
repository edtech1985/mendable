import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { MendableFloatingButton } from "@mendable/search";
import { Provider } from "./components/ui/provider"

function App() {
  return (
    <Provider>
      <Box bg="black" minH="100vh" p={4}>
        {/* Header */}
        <Box bg="blue.500" color="white" py={6} px={4} textAlign="center">
          <Heading as="h1" size="lg">
            Welcome!
          </Heading>
          <Text fontSize="md" mt={2}>
            This is a small example to demonstrate the Mendable floating button.
          </Text>
        </Box>

        {/* Main content */}
        <VStack mt={10} align="center">
          <Heading as="h2" size="md">
            About me
          </Heading>
          <Text textAlign="center" maxW="600px">
            I am a fullstack developer passionate about creating pleasant and
            responsive interfaces. I have experience with React, TypeScript,
            Node.js, and tools like Chakra UI and Material UI.
          </Text>
          <Text textAlign="center" maxW="600px">
            Additionally, I am an artificial intelligence enthusiast with a
            strong interest in exploring and learning more about this
            fascinating field.
          </Text>
          <Text textAlign="center" maxW="600px">
            This project is a demonstration of the usage of the Mendable
            floating button. If you have any questions, feel free to explore!
          </Text>
          <Link href="https://mendable.ai" color="blue.500" fontWeight="bold">
            Learn more about Mendable
          </Link>
        </VStack>

        {/* Floating button */}
        <MendableFloatingButton
          popupText="Hey, ask me a question"
          welcomeMessage="What you would like to know about me?"
          anon_key={"65c0f0b2-f93f-4e98-8cff-4abb2a974924"}
          language="english"
        />
      </Box>
    </Provider>
  );
}

export default App;
