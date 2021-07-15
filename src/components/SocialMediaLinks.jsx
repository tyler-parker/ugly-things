import React from 'react'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function SocialMediaLinks(props) {
    return (
        <ButtonGroup variant="ghost" color="gray.600" {...props}>
            <IconButton as="a" href="https://www.linkedin.com/in/tylerparkerdev/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
            <IconButton as="a" href="https://github.com/tyler-parker" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
            <IconButton as="a" href="https://twitter.com/salsaparker" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
        </ButtonGroup>
    )
}
