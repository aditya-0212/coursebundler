import React,{useState} from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
const UpdateProfile = () => {
  const [name,setName] = useState('');
  return (
   <Container py="16" minH={'90vh'}>
<form>
<Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my="16"
          textAlign={['center', 'left']}
        />

     <VStack spacing={'8'}>
     <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type={'text'}
            focusBorderColor="yellow.500"
          />{' '}
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type={'text'}
            focusBorderColor="yellow.500"
          />{' '}
          <Button
            
            w="full"
            colorScheme={'yellow'}
            type="submit"
          >
            Update
          </Button>
      </VStack>   
</form>
   </Container>
  )
}

export default UpdateProfile