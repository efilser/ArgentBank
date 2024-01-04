import { createAsyncThunk } from '@reduxjs/toolkit';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Une erreur s\'est produite lors de la connexion');
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token); // Enregistrer le token dans le local storage
      return token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token'); // Supprimez le token du local storage

      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
