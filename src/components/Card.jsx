import React from 'react'
import {
    Box,
    Image,
    Text,
    Stack,
    Button

} from '@chakra-ui/react'
import { UglyThingsContextConsumer } from '../context/UglyThingsContext'

const uglySponge = 'https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2017/06/spopng8.jpg?resize=677%2C846'


export function Card (props) {
    return (
            <Box
                maxW="sm" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow='lg'
            >
                <Image 
                    alt='ugly thing' 
                    src={props.item.imgUrl} 
                    boxSize='sm'
                />
                <Box p={5} d='flex'>
                    <Stack alignItems='left' textAlign='left'>
                        <Text mt='1' >{props.item.title} </Text>
                        <Text mt='1' fontSize='sm'>{props.item.description}</Text>
                    </Stack>
                    <UglyThingsContextConsumer>
                        {context => <Button onClick={context.handleDelete}>Delete</Button>}
                    </UglyThingsContextConsumer>
                </Box>
            </Box>
    )
}
