import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CatData } from '../types';

const fetchCategoriedCats = createAsyncThunk<
  CatData,
  { id: number; page: number }
>('categoriedCats/fetch', async ({ id, page }) => {
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`
  );
  return { data: response.data, id, page };
});

export { fetchCategoriedCats };
