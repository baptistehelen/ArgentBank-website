import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signInUser = createAsyncThunk(
  "signIn/signInUser",
  async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(
          "Impossible de se connecter, mot de passe ou email incorrect."
        );
      }

      const data = await response.json();

      const token = data.body.token;

      console.log("Connexion réussie !");
      return { user: data, redirectTo: "/profile", token };
    } catch (error) {
      console.error("Erreur de connexion :", error);
      throw error;
    }
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: null,
    error: null,
    token: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    Logout: (state) => {
      state.user = null;
      console.log("Vous êtes déconnecté !");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { clearError, Logout, setToken } = signInSlice.actions;

export default signInSlice.reducer;
