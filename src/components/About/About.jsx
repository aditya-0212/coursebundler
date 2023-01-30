import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import { Link } from 'react-router-dom';
  import introVideo from '../../assets/videos/intro.mp4';
  import termsAndCondition from '../../assets/docs/termsAndCondition';


// here we build Founder component
const Founder = () => (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
      <Avatar
        src="https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Aditya Choubisa" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a full-stack developer and a teacher.
      Our mission is to provide quality content at reasonable price.`}
      />
    </VStack>
        </Stack>
)


//here we build video player component
const VideoPlayer = () => (
    <Box>
      <video
        autoPlay
        loop
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );


  //here we build Terms and condintion component
  const TandC = ({ termsAndCondition }) => (
    <Box>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );


  //here we build main component about
const About = () => {
  return (

// here we define Container    
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>

{/* This is heading         */}
        <Heading children="About Us" textAlign={['center', 'left']} />

{/* Here we declare Founder */}
        <Founder />

{/* build check out our plan         */}
        <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

{/* here we declare videoPlayer component */}
      <VideoPlayer />

{/* here we declare Terms and condition component       */}
      <TandC termsAndCondition={termsAndCondition} />


{/* here we define pay is secured by Razorpay */}
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
        </Container>
  )
}

export default About