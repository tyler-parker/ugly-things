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

export default function EditModal() {
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
                                    value={context.title}
                                    onChange={context.handleChange} 
                                    placeholder="Title" 
                                    aria-label='title'
                                />
                                <Input 
                                    type='url' 
                                    name='imgUrl'
                                    value={context.imgUrl}
                                    onChange={context.handleChange}  
                                    placeholder="Img URL" 
                                    aria-label='image URL' 
                                />
                                <Textarea 
                                    type='text' 
                                    name='description'
                                    value={context.description}
                                    onChange={context.handleChange}  
                                    placeholder="Description" 
                                    aria-label='description' 
                                />
                        </Stack>
                        
                    </Flex>
                    <HStack align='center' justifyContent='center'>
                        <Button 
                        onSubmit={context.handleEdit} 
                        colorScheme='teal' 
                        size='lg'
                        m={2}
                        onClick={onClose}
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