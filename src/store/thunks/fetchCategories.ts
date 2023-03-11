import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Categories } from '../types';

const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await axios.get<Categories[]>(
    'https://api.thecatapi.com/v1/categories'
  );
  return response.data;
});

export { fetchCategories };
