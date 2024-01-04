import { createAsyncThunk } from '@reduxjs/toolkit';

export const getToken = createAsyncThunk(
  'auth/getToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      return token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password);
    console.log(JSON.stringify({ email, password }));
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
      console.log(response);

      const data = await response.json();
      console.log(data);
      const token = data.body.token;
      console.log(token);
      localStorage.setItem('token', token); // Enregistrer le token dans le local storage
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
