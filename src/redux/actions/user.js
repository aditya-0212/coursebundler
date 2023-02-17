import {server} from '../store';
import axios from 'axios';

//login function ek async function return krega
export const login = (email,password)=> async (dispatch)=>{
      try{
          dispatch({type:'loginRequest'});
     
          
          const { data } =  await axios.post('http://localhost:4000/api/v1/login',{email,password},{
              headers:{
                  "content-type":"application/json",
              },
//jisme bhi cookies ka use aega usme mendatory withCredentials true dena hai              
              withCredentials:true,
          });
          
          dispatch({type:'loginSuccess',payload:data});
      }catch(error){
       dispatch({
           type:'loginFail',
           payload:error.response.data.message
       });
      }
};

//getMyProfile
export const loaduser = () => async dispatch => {
    try{
        dispatch({type:'loadUserRequest'});

        //yha get request kr rhe hai isliye hame kuch bhi pass krne ki need nhi hai aur headers ki need bhi nhi hai
        const { data } = await axios.get(
            'http://localhost:4000/api/v1/me',
            {
                withCredentials:true,
            }

        );
        
        dispatch({type:'loadUserSuccess',payload:data.user});
    }catch(error){
        dispatch({type:'loaduserFail', payload: error.response.data.message});
    }
};

//this is for logout
export const logout = () => async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
  
      const { data } = await axios.get('http://localhost:4000/api/v1/logout', {
        withCredentials: true,
      });
      dispatch({ type: 'logoutSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'logoutFail', payload: error.response.data.message });
    }
  };

  //sign up function
  export const register = formdata => async dispatch => {
    try {
      dispatch({ type: 'registerRequest' });
  
      const { data } = await axios.post('http://localhost:4000/api/v1/register', formdata, {

//form data hai so content-type bhi form data assign kra hai        
        headers: {
          'Content-type': 'multipart/form-data',
        },
  
        withCredentials: true,
      });
  
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
  };
  