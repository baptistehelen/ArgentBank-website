import { configureStore } from '@reduxjs/toolkit';
import signInReducer from './components/LoginSlice'; 

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
