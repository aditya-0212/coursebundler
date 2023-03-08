import React,{useEffect, useState} from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { resetPassword } from '../../redux/actions/profle';
const ResetPassword = () => {
    const [password, setPassword] = useState('');
 // useParams() ka use api me tokens ko access krne k liye krte hai   

    const params = useParams();
    const navigate = useNavigate();

    const {loading,message,error} = useSelector(state=>state.profile);

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(resetPassword(params.token,password));
    };

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:'clearError'});
      }
      if(message){
        toast.success(message);
        dispatch({type:'clearMessage'})
        navigate("/login");
      }
    },[dispatch,error,message]);
  return (
    <Container py={'16'} h="90vh">

{/* we start form from here */}
      <form onSubmit={submitHandler}>
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
          isLoading={loading}
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