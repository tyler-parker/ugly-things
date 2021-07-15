import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
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
    HStack,
    Divider
  } from "@chakra-ui/react"
import { UglyThingsContextConsumer } from "../context/UglyThingsContext"
import { ModalPreview } from './ModalPreview'

export default function EditModal(props) {
  const [inputData, setInputData] = useState({
    title: "" || props.title,
    description: "" || props.description,
    imgUrl: "" || props.imgUrl
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
              <ModalPreview 
              id={props.id} 
              title={props.title} 
              description={props.description} 
              imgUrl={props.imgUrl} />

              <Divider orientation="horizontal" mt={4} mb={4} size='xl'/>
                  <Flex justifyItems='center' p='10px'>
                      <Stack spacing={3} w='20em'>
                              <Input 
                                  type='text' 
                                  name='title'
                                  value={inputData.title}
                                  onChange={handleChange} 
                                  placeholder={props.title} 
                                  aria-label='title'
                              />
                              <Input 
                                  type='url' 
                                  name='imgUrl'
                                  value={inputData.imgUrl}
                                  onChange={handleChange}  
                                  placeholder={props.imgUrl} 
                                  aria-label='image URL' 
                              />
                              <Textarea 
                                  type='text' 
                                  name='description'
                                  value={inputData.description}
                                  onChange={handleChange}  
                                  placeholder={props.description} 
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