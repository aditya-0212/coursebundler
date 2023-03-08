import React,{useEffect, useState} from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profle';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const {loading,message,error} = useSelector(state=>state.profile);
    
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(forgetPassword(email));
    };

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:'clearError'});
      }
      if(message){
        toast.success(message);
        dispatch({type:'clearMessage'})
      }
    },[dispatch,error,message]);


  return (
    <Container py={'16'} h="90vh">

{/* we use form tag from here */}
    <form onSubmit={submitHandler}>
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
        isLoading={loading}
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