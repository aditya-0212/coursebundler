import React from 'react'
import {Heading, Stack, VStack, Text, Button,Image,Box, HStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import './home.css';
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from '../../assets/videos/intro.mp4';
const Home = () => {
  return (

// main section start from here    
    <section className="home">
      <div className="container">

{/* learn from the expert         */}
       <Stack
       direction={['column','row']}
       height="100%"
       justifyContent={['center', 'space-between']}  
       alignItems="center"
       spacing={['16','56']}
       >
         <VStack width={'full'} alignItems={['center','flex-end']} spacing="8">
             <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}/>
             <Text 
             fontSize={'2xl'} fontFamily="cursive" textAlign={['center','left']} children="Find Valueable Content Ar Reasonable Price"/>
             <Link to="/courses">
                 <Button size={"lg"} colorScheme="yellow">Explore now</Button>
             </Link>
        </VStack>  
        <Image className="vector-graphics" boxSize={'md'} src={vg} objectFit="contain"/>
       </Stack>
      </div>

{/* Brands banner */}
      <Box padding={"8"} bg="blackAlpha.800" w='100vw'>
          <Heading textAlign={'center'} fontFamily="body" color={'yellow.400'} children="Our Brands"/>
      <HStack className='brandsBanner' justifyContent={'space-between'} marginTop="4">
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
      </HStack>
      </Box>

{/* video here       */}
    <div className="container2">
        <video  controls controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemoteplayback src={introVideo}></video>
    </div>
    </section>
    
  )
}

export default Home