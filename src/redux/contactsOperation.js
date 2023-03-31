import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64248e779e0a30d92b1ea50d.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (number, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', number);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
