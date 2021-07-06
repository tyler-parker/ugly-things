import React from 'react'
import {
    Box,
    Image,
    Text,
    Stack,
    Grid

} from '@chakra-ui/react'

const uglySponge = 'https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2017/06/spopng8.jpg?resize=677%2C846'


export default function Card(props) {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={10}>
                    <Box
                        maxW="sm" 
                        borderWidth="1px" 
                        borderRadius="lg" 
                        overflow="hidden" 
                        boxShadow='lg'
                    >
                        <Image 
                            alt='ugly thing' 
                            src={props.item.imgURL} 
                            isRounded 
                            boxSize='300px'
                        />
                        <Box p={5} d='flex'>
                            <Stack alignItems='left' textAlign='left'>
                                <Text mt='1' >{props.item.title} </Text>
                                <Text mt='1' fontSize='sm'>{props.item.description}</Text>
                            </Stack>
                        </Box>
                    </Box>

        </Grid>
    )
}
