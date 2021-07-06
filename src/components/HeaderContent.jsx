import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { Logo } from '../Logo';
import {    
    Heading,  
    Flex,  
    Link,
    IconButton
} from "@chakra-ui/react"; 

import { ColorModeSwitcher } from './ColorModeSwitcher';

export function HeaderContent() {
    return (
        <>
            <Flex align="center" mr={5}>  
                    <Heading as="h1" size="xl" letterSpacing={"-.1rem"} p='15px'>  
                        Made with Chakra  
                    </Heading>
                    <Link href='https://chakra-ui.com/' isExternal>
                        <Logo h="4vmin" pointerEvents="none" />  
                    </Link>
                </Flex>  
    
                <Flex justifyContent='flex-end' alignItems='space-around'>
                    <Link href='https://github.com/tyler-parker' isExternal>
                        <IconButton icon={<VscGithub />} isRound ></IconButton>
                    </Link>
                    <ColorModeSwitcher justifySelf="flex-end"/>
                </Flex> 
        </>
    )
}
