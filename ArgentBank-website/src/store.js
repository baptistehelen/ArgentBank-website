import { configureStore } from '@reduxjs/toolkit';
import signInReducer from './components/SigninSlice'; 

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
