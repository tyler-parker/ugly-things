import React from 'react'
import {
    Stack,
    Heading,
    Input,
    Box,
    Flex,
    Textarea,
    HStack,
    Button,
    useToast
} from '@chakra-ui/react'

import { UglyThingsContextConsumer } from '../context/UglyThingsContext'

export default function Form() {
    const toast = useToast()
    return (
        <UglyThingsContextConsumer>
            {context =>  
                <Box 
                justifyItems='center' 
                align='center'
                maxWidth='500px' 
                borderWidth={1} 
                borderRadius={8} 
                boxShadow='lg'
                p={8} 
            >
                <Heading>Submit Your Ugly Thing</Heading>
                    <Flex justifyItems='center' p='10px'>
                        <Stack spacing={3} w='20em'>
                                <Input 
                                    type='text' 
                                    name='title'
                                    value={context.title}
                                    onChange={context.handleChange} 
                                    placeholder="Title" 
                                    aria-label='title'
                                />
                                <Input 
                                    type='url' 
                                    name='imgURL'
                                    value={context.imgURL}
                                    onChange={context.handleChange}  
                                    placeholder="Img URL" 
                                    aria-label='image URL' 
                                />
                                <Textarea 
                                    type='text' 
                                    name='description'
                                    value={context.description}
                                    onChange={context.handleChange}  
                                    placeholder="Description" 
                                    aria-label='description' 
                                />
                        </Stack>
                        
                    </Flex>
                    <HStack align='center' justifyContent='center'>
                        <Button 
                        onSubmit={context.handleSubmit} 
                        colorScheme='teal' 
                        size='lg'
                        onClick={() =>
                            toast({
                              title: "Ugly Thing Submitted",
                              description: "Wow. There it is. Truly an abomination.",
                              status: "success",
                              duration: 9000,
                              isClosable: true,
                            })
                          }
                        >
                            Submit
                        </Button>
                    </HStack>
            </Box>
            }
        </UglyThingsContextConsumer>    
    )
}
