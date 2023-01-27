import React,{useState} from 'react'
import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent="center" spacing={'16'}>
            <Heading children={'Welcome to CourseBundler'}/>
            <form style={{ width: '100%' }}>
                <Box my={'4'}>
                <FormLabel htmlFor="email" children="Email Address" />
                <input required 
                id="email"
                 value={email} 
                 onChange={e => setEmail(e.target.value)} 
                 placeholder="abc@gmail.com"
                  type={'email'}
              focusBorderColor="yellow.500"/>
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor="password" children="Password"/>
                    <input required id="password" value={password} onChange={e => setPassword(e.target.value)} type={'password'} placeholder="Enter your Password" focusBorderColor="yellow.500"/>
                </Box>
                <Box>
                    <Link to="/forgetpassword"><Button fontSize={'sm'} variant="link" >Forget Password?</Button></Link>
                </Box>
                <Button my="4" colorScheme={'yellow'} type="submit">
            Login
          </Button>
                <Box>
                    New User?{' '}
                    <Link to="/register">
                        <Button colorScheme={'yellow'} variant="link">sign Up</Button>{' '}
                        here
                    </Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Login