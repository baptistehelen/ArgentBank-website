import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const editProfile = createAsyncThunk(
  'profile/editProfile',
  async (userName, { getState }) => {
    try {
      const state = getState(); 
      const token = state.signIn.token; 
      
      if (!token) {
        throw new Error('Token non défini'); 
      }

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ userName }),
      });
      
      if (!response.ok) {
        throw new Error('Impossible de se connecter');
      }
      
      const data = await response.json();
      
      console.log('Changement de username au Profile reussi !', data); 
      
      return data;
    } catch (error) {
      console.error('Erreur de connexion et de changement de profil :', error); 
      throw error;
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  profile: {
    status: 0,
    message: "",
    body: {
      id: "",
      email: ""
    }
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {

        state.profile = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
