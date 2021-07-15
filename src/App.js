import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Divider,
  SimpleGrid,
  theme,
} from '@chakra-ui/react';


import Navbar from './components/Header';
import Form from './components/Form'
import Footer from './components/Footer'
import { UglyThings } from './context/UglyThings';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign="center" fontSize="xl">
          <VStack spacing={10} margin={10}>
            <Form />
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, "2xl": 4}}  gap={10}>
              <UglyThings />
            </SimpleGrid>
          </VStack>
      </Box>
      <Divider />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
