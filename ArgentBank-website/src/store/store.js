import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../slices/LoginSlice'; 
import profileReducer from '../slices/ProfileSlice';

export default configureStore({
  reducer: {
    signIn: signInReducer,
    profile: profileReducer,
  },
});
