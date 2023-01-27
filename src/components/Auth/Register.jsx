import React,{useState} from 'react'
import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';

  // css object for the styling choose file
  export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
  };
  
  const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
  };

const Register= () => {

    //here useState for name,email and password
    const [name,setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev,setImagePrev] = useState('');
    const [image,setImage] = useState('');

    const changeImageHandler = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }
  return (
      //from here main code start
    <Container h={'95vh' } >
        <VStack h={'full'} justifyContent="center"  spacing={'16'} >
            <Heading textTransform={'uppercase'} children={'Registration'}/>

  {/* from here we start our form           */}
            <form style={{ width: '80%' }} >

{/* This is for showing Avatar         */}
          <Box my="4" display={'flex'} justifyContent="center">
      <Avatar src={imagePrev}size={'2xl'}/>
          </Box>

 {/* This is for the name Input           */}
            <Box my={'4'}>
                <FormLabel htmlFor="name" children="Name" />
                <Input required 
                id="name"
                 value={name} 
                 onChange={e => setName(e.target.value)} 
                 placeholder="abc"
                  type={'text'}
              focusBorderColor="yellow.500"/>
            </Box>

  {/* This is for the email input */}
                <Box my={'4'}>
                <FormLabel htmlFor="email" children="Email Address" />
                <Input required 
                id="email"
                 value={email} 
                 onChange={e => setEmail(e.target.value)} 
                 placeholder="abc@gmail.com"
                  type={'email'}
              focusBorderColor="yellow.500"/>
                </Box>

{/* This is for the password input            */}
                <Box my={'4'}>
                    <FormLabel htmlFor="password" children="Password"/>
                    <Input required id="password" value={password} onChange={e => setPassword(e.target.value)} type={'password'} placeholder="Enter your Password" focusBorderColor="yellow.500"/>
                </Box>
               

{/* This is for the choose Avatar */}
                <Box my={'4'}>
                    <FormLabel htmlFor="chooseAvatar" children="Choose Avatar"/>
                    <Input accept="image/*" required id="chooseAvatar" type={'file'}  focusBorderColor="yellow.500"
                    css={fileUploadStyle} 
                    onChange={changeImageHandler}/>
                </Box>

{/* here we give Sign up button             */}
                <Button my="4" colorScheme={'yellow'} type="submit">
           Sign Up
          </Button>
                <Box>
                    Already Signed Up?{' '}
                    <Link to="/Login">
                        <Button colorScheme={'yellow'} variant="link"> Login here</Button>{' '}
                      
                    </Link>
                </Box>
            </form>
           
        </VStack>
    </Container>
  )
}

export default Register