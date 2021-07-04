import React from "react";  
import {  
    Box,  
    Heading,  
    Flex,  
    Link,
    IconButton  
} from "@chakra-ui/react";  
import { VscGithub, VscGithubInverted } from "react-icons/vsc";

import { ColorModeSwitcher } from '../ColorModeSwitcher';
  
// const MenuItems = ({ children }) => (  
//     <Link mt={{ base: 4, md: 0 }} mr={6} display="block">  
//         {children}  
//     </Link>  
// );  
  
const Navbar = props => {  
  
    return (  
        <Flex  
            as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="1.5rem"  
            bg="gray.900"  
            color="teal.300"  
            borderBottom="1px solid black"  
            {...props}  
        >  
            <Flex align="center" mr={5}>  
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>  
                    Made with Chakra  
                </Heading>  
            </Flex>  
  
            <Flex justifyContent='flex-end' alignItems='space-around'>
                {/* <MenuItems>Home</MenuItems>  
                <MenuItems>Blogs</MenuItems>  
                <MenuItems>About</MenuItems>  
                <MenuItems >Contact</MenuItems>   */}
                <IconButton icon={<VscGithub />} isRound ></IconButton>
                <ColorModeSwitcher justifySelf="flex-end"/>
            </Flex>  
        </Flex>  
    );  
};  
  
export default Navbar;  