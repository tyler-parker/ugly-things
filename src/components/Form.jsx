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

import Toast from './Toast'

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
                <form>
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
                                    name='imgUrl'
                                    value={context.imgUrl}
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
                        >
                            Submit
                        </Button>
                    </HStack>
                </form>
            </Box>
            }
        </UglyThingsContextConsumer>    
    )
}
