import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    //here we start our container
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Contact Us" />

        {/* here we use our form tag */}
        <form style={{ width: '100%' }}>
          {/* here we use our Input tag for name */}
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          {/* here we use our Input tag for Email */}
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          {/* here we use Textarea for the message */}
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message...."
              focusBorderColor="yellow.500"
            />
          </Box>

          {/* here we use button for send mail */}
          <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>

          {/* here we create Link for the request for a course */}
          <Box my="4">
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
