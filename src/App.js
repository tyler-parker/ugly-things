import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Divider,
  Grid,
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
            <Grid templateColumns='repeat(3, 1fr)' gap={10}>
              <UglyThings />
            </Grid>
          </VStack>
      </Box>
      <Divider />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
