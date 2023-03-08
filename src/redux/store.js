import { configureStore } from '@reduxjs/toolkit'
import { adminReducer } from './reducers/adminReducer';
import { courseReducer } from './reducers/courseReducer';
import { otherReducer } from './reducers/otherReducer';
import { profileReducer, userReducer } from './reducers/userReducer';



const store = configureStore({
    reducer:{
     user:userReducer,
     profile:profileReducer,
     course:courseReducer,
     admin:adminReducer,
     other:otherReducer,
    },
});

export default store;

export const server = 'https://coursebundlerserver-six.vercel.app/api/v1';