import { VStack,Box,Stack,Heading, HStack} from '@chakra-ui/react'
import React from 'react'
import {
    TiSocialYoutubeCircular,
    TiSocialInstagramCircular,
  } from 'react-icons/ti';
  import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} minH={'10vh'} bg="blackAlpha.900">
         <Stack direction={['column','row']}>
             <VStack alignItems={['center', 'flex-start']} width="full">
                 <Heading children="All Rights Reserved" color={"white"}/>
                 <Heading color={'yellow.400'} fontFamily={'body'} size="sm" children="@6 Pack Programmer"/>
             </VStack>
             <HStack spacing={['2','10']} color={'white'} fontSize="50" justifyContent="center">
                 <a href="https://youtube.com/6packprogrammer" target={'blank'}><TiSocialYoutubeCircular /></a>
                 <a href="https://instagram.com/meabhisingh" target={'blank'}> <TiSocialInstagramCircular /></a>
                 <a href="https://github.com/meabhisingh" target={'blank'}><DiGithub /></a>
             </HStack>
         </Stack>
    </Box>
  )
}

export default Footer