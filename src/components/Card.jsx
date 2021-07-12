import React from 'react'
import {
    Box,
    Image,
    Text,
    VStack,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    HStack,

} from '@chakra-ui/react'
import { UglyThingsContextConsumer } from '../context/UglyThingsContext'

export function Card (props) {
    return (
            <Box
                maxW="xs" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow='lg'
                
            >
                <Image 
                    alt='ugly thing' 
                    src={props.item.imgUrl} 
                    boxSize='xs'
                />
                <Box p={5} >
                    <VStack alignItems='left' textAlign='left'>
                        <Text mt='1' isTruncated >{props.item.title} </Text>
                        <Popover>
                            <PopoverTrigger >
                               
                                    <Text mt='1' noOfLines={1}  fontSize='sm'>{props.item.description}</Text>
                            </PopoverTrigger>
                            <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Description</PopoverHeader>
                            <PopoverBody><Text mt='1' fontSize='sm'>{props.item.description}</Text></PopoverBody>
                        </PopoverContent>
                        </Popover>
                    </VStack>
                </Box>
                        <UglyThingsContextConsumer>
                            {context => 
                                <HStack p={2}>
                                    <Button
                                    m={1} 
                                    size="lg" 
                                    onClick={context.handleEdit}
                                    >
                                    Edit
                                    </Button>
                                    
                                    <Button 
                                    colorScheme="red" 
                                    m={1} 
                                    size="lg" 
                                    onClick={context.handleDelete}
                                    >Delete
                                    </Button>
                                </HStack>
                            }
                        </UglyThingsContextConsumer>
            </Box>
    )
}
