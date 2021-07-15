import React from 'react'
import { HStack, ButtonGroup, IconButton, Heading, useColorModeValue } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'

export function FooterContent() {
    return (
        <HStack>
            <Heading size='md' color={useColorModeValue('teal', 'white')}>
                        Made By <a href='https://www.linkedin.com/in/tylerparkerdev/'>Tyler Parker</a>
            </Heading>
            <ButtonGroup variant="ghost" color="gray.600">
                <IconButton 
                as="a" 
                href="https://reactjs.org/" 
                aria-label="React Documentation"
                color={useColorModeValue('gray.600', 'teal')} 
                icon={<FaReact fontSize="20px" />} />
            </ButtonGroup>
        </HStack>
    )
}
