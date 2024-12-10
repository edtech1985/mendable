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
      <Box bg="gray.50" minH="100vh" p={4}>
        {/* Header */}
        <Box bg="blue.500" color="white" py={6} px={4} textAlign="center">
          <Heading as="h1" size="lg">
            Bem-vindo(a)!
          </Heading>
          <Text fontSize="md" mt={2}>
            Meu nome é Edson, e este é um pequeno exemplo para demonstrar
            minhas habilidades com React, Chakra UI, e o botão flutuante da
            Mendable.
          </Text>
        </Box>

        {/* Conteúdo principal */}
        <VStack mt={10} align="center">
          <Heading as="h2" size="md">
            Sobre mim
          </Heading>
          <Text textAlign="center" maxW="600px">
            Sou um desenvolvedor fullstack apaixonado por criar interfaces
            agradáveis e responsivas. Tenho experiência com React, TypeScript,
            Node.js, e ferramentas como Chakra UI e Material UI.
          </Text>
          <Text textAlign="center" maxW="600px">
            Este projeto é uma demonstração do uso do botão flutuante da
            Mendable. Caso tenha dúvidas, sinta-se à vontade para explorar!
          </Text>
          <Link href="https://mendable.ai" color="blue.500" fontWeight="bold">
            Saiba mais sobre Mendable
          </Link>
        </VStack>

        {/* Botão flutuante */}
        <MendableFloatingButton
          anon_key={"65c0f0b2-f93f-4e98-8cff-4abb2a974924"}
        />
      </Box>
    </Provider>
  );
}

export default App;
