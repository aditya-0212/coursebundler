import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import {
    Avatar,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';
import { fileUploadCss } from '../Auth/Register';

// profile component start from here
const Profile = () => {

//  this is oject of that user who loged in course   
    const user = {
        name:'abhishek',
        email:'abhi@gmail.com',
        createdAt : String(new Date().toISOString()),
        role:"user",
        subscription:{
            status:"active",
        },
        playlist:[{
            course:"sadasd",
            poster:"https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
        }]
    }


//removeFromPlayListHandler function
    const removeFromPlaylistHandler = (id) =>{
        console.log(id);
    }

//changeImageSubmitHandler function
    const changeImageSubmitHandler = (e,image)=>{
        e.preventDefault();
    };
    const { isOpen, onClose, onOpen } = useDisclosure();
  return (

// main container    
    <Container minH={'90vh'} maxW="container.lg" py="8">
         <Heading children="Profile" m="8" textTransform={'uppercase'} />
         <Stack

//justifyContent - controls alignment of all items on the main axis
        justifyContent={'flex-start'}
        direction={['column', 'row']}
       
//Align-items - controls alignment of all items on the cross axis        
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >

{/* This is for avatar           */}
         <VStack>
          <Avatar boxSize={'48'}  />
          <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">
            Change Photo
          </Button>
        </VStack>

{/* This is for name email cratedat and subscription         */}
         <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>{' '}
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />

{/* backend se jo data aega vo "2022-07-18T16:13;39.945Z" k form me aega jha agar T se split krenge to o index pr apne ko data mil jegi */}
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription && user.subscription.status === 'active' ? (
                <Button

//color property me sirf text color change hota hai and colorScheme me text ka background color bhi change hota hai
                  color={'yellow.500'}

// variant unstyled me koi bhi style apply nhi hoti hai text pr                  
                  variant="unstyled"
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

{/* Update Profile and Change Password */}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
          </VStack>
</Stack>

{/* This is playlist */}
          <Heading children="Playlist" size={'md'} my="8" />
          {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap="wrap"
          p="4"
        >
          {user.playlist.map(element => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit="contain"
                src={element.poster}
              />
               <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>

{/* playList delete */}
                <Button onClick={removeFromPlaylistHandler(element.course)}>
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            ))}
          </Stack>
        )}
        <ChangePhotoBox 
        changeImageSubmitHandler={changeImageSubmitHandler} 
        isOpen={isOpen} 
        onClose={onClose}/>
        </Container>
  )
}

export default Profile

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){

    const [image,setImage] = useState('');
    const [imagePrev,setImagePrev] = useState('');
    const changeImage = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const closeHandler = () =>{
        onClose();
        setImagePrev("");
        setImage("");
    }

    return(
    <Modal isOpen={isOpen} onClose={closeHandler}>

{/* backdropFilter ka use background ko blur krne k liye */}
        <ModalOverlay backdropFilter={'blur(10px)'}/>
        <ModalContent>
            <ModalHeader>Change Photo</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
            <Container>
                <form onSubmit={e=>changeImageSubmitHandler(e,image)}>
                <VStack spacing={'8'}>
                    {imagePrev && <Avatar src={imagePrev} boxSize={'48'}/>}
               <Input type={'file'} css={{ '&::file-selector-button': fileUploadCss}} onChange={changeImage}/>
                  <Button w="full" colorScheme={"yellow"} type="submit">Change</Button>
                </VStack>
                </form>
            </Container>
            </ModalBody>

            <ModalFooter>
                <Button m="3" onClick={closeHandler}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}