import { configureStore } from '@reduxjs/toolkit';
import signInReducer from './components/LoginSlice'; 
import profileReducer from './components/ProfileSlice';

export default configureStore({
  reducer: {
    signIn: signInReducer,
    profile: profileReducer,
  },
});
