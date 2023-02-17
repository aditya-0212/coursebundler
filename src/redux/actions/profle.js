import { server } from '../store';
import axios from 'axios';

//updateProfile
export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileRequest' });

    const { data } = await axios.put(
        'http://localhost:4000/api/v1/updateprofile',
      {
        name,
        email,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    );

    dispatch({ type: 'updateProfileSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};

//updateProfilePicture
export const updateProfilePicture = formdata => async dispatch => {
    try {
      dispatch({ type: 'updateProfilePictureRequest' });
  
      const { data } = await axios.put(
        'http://localhost:4000/api/v1/updateprofilepicture',
        formdata,
        {
          headers: {
            'Content-type': 'multipart/form-data',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'updateProfilePictureSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'updateProfilePictureFail',
        payload: error.response.data.message,
      });
    }
  };

//change password
export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: 'changePasswordRequest' });
  
      const { data } = await axios.put(
        'http://localhost:4000/api/v1/changePassword',
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
  
          withCredentials: true,
        }
      );
  
      dispatch({ type: 'changePasswordSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'changePasswordFail',
        payload: error.response.data.message,
      });
    }
  };