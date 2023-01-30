import React from 'react'
import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    VStack,
  } from '@chakra-ui/react';
const Subscribe = () => {
  return (

// we start container form here    
    <Container h="90vh" p="16">

{/* heading form here         */}
      <Heading children="Welcome" my="8" textAlign={'center'} />

{/* main box start from here */}
      <VStack
        boxShadow={'lg'}
        
        // align-items: stretch; The flexbox items will stretch across the whole cross axis.
        alignItems="streched"
        borderRadius={'lg'}

//align items me by default kuch spacing hoti hai so spacing ki value 0 assing kri         
        spacing="0"
      >

        <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Pro Pack - ₹299.00`} />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text children={`Join pro pack and get access to all content.`} />
            <Heading size="md" children={'₹299 Only'} />
          </VStack>

{/* Buy now */}
       <Button
            my="8"
            w="full"
            colorScheme={'yellow'}
          >
            Buy Now
          </Button>
        </Box>

{/* 100% refund  */}
        <Box bg="blackAlpha.600" p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            color={'white'}
            textTransform="uppercase"
            size="sm"
            children={'100% refund at cancellation'}
          />

          <Text
            fontSize={'xs'}
            color="white"
            children={'*Terms & Conditions Apply'}
          />
        </Box>
      </VStack>
    </Container>
  )
}

export default Subscribe