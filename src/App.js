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
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign="center" fontSize="xl">

          <VStack spacing={10} margin={10}>
            <Form />
            <Card />
          </VStack>

      </Box>
      <Divider />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
