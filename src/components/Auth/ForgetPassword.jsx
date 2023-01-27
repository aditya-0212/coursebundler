import React,{useState} from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
  return (
    <Container py={'16'} h="90vh">

{/* we use form tag from here */}
    <form>
      <Heading
        children="Forget Password"
        my="16"
        textTransform={'uppercase'}
        textAlign={['center', 'left']}
      />

{/* we use Input for the email */}
      <VStack spacing={'8'}>
        <Input
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          type={'email'}
          focusBorderColor="yellow.500"
        />

{/* We use Button tag for the send Reset Link */}
        <Button
          type="submit"
          w={'full'}
          colorScheme="yellow"
        >
          Send Reset Link
        </Button>
      </VStack>
    </form>
  </Container>
  )
}

export default ForgetPassword