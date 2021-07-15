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

export function ModalPreview (props) {
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
                    src={props.imgUrl} 
                    boxSize='xs'
                    />
                <Box p={5} >
                    <VStack alignItems='left' textAlign='left'>
                        <Text mt='1' isTruncated >{props.title} </Text>
                        <Popover >
                            <PopoverTrigger  >
                            {/* <Box children="Click"> */}
                                <Text 
                                role='button'
                                mt='1' 
                                noOfLines={1}  
                                fontSize='sm' 
                                children="click">
                                    {props.description}
                                </Text>
                            {/* </Box>     */}

                            </PopoverTrigger>
                            <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Description</PopoverHeader>
                            <PopoverBody><Text 
                            mt='1' 
                            fontSize='sm'>{props.description}</Text></PopoverBody>
                        </PopoverContent>
                        </Popover>
                    </VStack>
                </Box>
                <UglyThingsContextConsumer>
                    {context => 
                        <HStack p={2}>
                            <Button 
                            colorScheme="red" 
                            m={1} 
                            size="lg" 
                            onClick={() => context.handleDelete(props._id)}
                            >Delete
                            </Button>

                            {console.log(props._id)}
                        </HStack>
                    }
                </UglyThingsContextConsumer>
            </Box>
    )
}
