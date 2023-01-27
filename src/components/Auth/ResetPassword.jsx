import React,{useState} from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
const ResetPassword = () => {
    const [password, setPassword] = useState('');
 // useParams() ka use api me tokens ko access krne k liye krte hai   
    const params = useParams();
  return (
    <Container py={'16'} h="90vh">

{/* we start form from here */}
      <form >
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>

 {/* we usse Input tag for the password */}
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

{/* we use Button tag for the Reset password */}
          <Button
            type="submit"
            w={'full'}
            colorScheme="yellow"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  )
}

export default ResetPassword




// http://localhost:3000/resetpassword/sadda   -> resetpassword/ k bad jo bhi value hogi vo token hoga jise apn access kr paenge with the help of params