import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const profileUser = createAsyncThunk(
  'profile/profileUser',
  async (_, { getState }) => {
    try {
      const state = getState(); 
      const token = state.signIn.token; 
      
      console.log('Token récupéré ! 2', token);
      if (!token) {
        throw new Error('Token non défini'); 
      }

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
      
      if (!response.ok) {
        throw new Error('Impossible de se connecter');
      }
      
      const data = await response.json();
      
      console.log('Profil récupéré !', data); 
      return { user: data, redirectTo: '/profile' };
    } catch (error) {
      console.error('Erreur de connexion :', error); 
      throw error;
    }
  }
);

const initialState = {
  profile: {
    status: 0,
    message: "",
    body: {
      id: "",
      email: ""
    }
  },
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.profile = { ...user };
        state.error = null;
      })
      .addCase(profileUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
  
});

export default profileSlice.reducer;
