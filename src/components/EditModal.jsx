import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Heading,
    Flex,
    Stack,
    Input,
    Textarea,
    HStack
  } from "@chakra-ui/react"
  import { UglyThingsContextConsumer } from "../context/UglyThingsContext"

export default function EditModal(props) {
    const [inputData, setInputData] = useState({
      title: "",
      description: "",
      imgUrl: ""
    })

    function handleChange(event) {
      const {name, value} = event.target
      setInputData(prevInputData => ({...prevInputData, [name]: value}))
  }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button size='lg' onClick={onOpen}>Edit</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
            <UglyThingsContextConsumer>
            {context =>  
                <Box 
                justifyItems='center' 
                align='center'
                maxWidth='500px' 
                p={8} 
            >
                <Heading size='lg' p={2}>Edit Your Ugly Thing</Heading>
                    <Flex justifyItems='center' p='10px'>
                        <Stack spacing={3} w='20em'>
                                <Input 
                                    type='text' 
                                    name='title'
                                    value={inputData.title}
                                    onChange={handleChange} 
                                    placeholder="Title" 
                                    aria-label='title'
                                />
                                <Input 
                                    type='url' 
                                    name='imgUrl'
                                    value={inputData.imgUrl}
                                    onChange={handleChange}  
                                    placeholder="Img URL" 
                                    aria-label='image URL' 
                                />
                                <Textarea 
                                    type='text' 
                                    name='description'
                                    value={inputData.description}
                                    onChange={handleChange}  
                                    placeholder="Description" 
                                    aria-label='description' 
                                />
                        </Stack>
                        
                    </Flex>
                    <HStack align='center' justifyContent='center'>
                        <Button 
                        onClick={() => context.handleEdit(inputData, props.id)} 
                        colorScheme='teal' 
                        size='lg'
                        m={2}
                        
                        >
                            Submit
                        </Button>
                    </HStack>
            </Box>
            }
        </UglyThingsContextConsumer>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }