import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../thunks/fetchCategories';
import { fetchCategoriedCats } from '../thunks/fetchCategoriedCat';
import { Cats, Categories } from '../types';

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    isLoading: false,
    categories: Array<Categories>(),
    categoryId: '',
    cats: Array<Cats>(),
    error: false,
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(fetchCategoriedCats.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoriedCats.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.page > 1) {
        state.cats = [...state.cats, ...action.payload.data];
      } else state.cats = [...action.payload.data];
    });
    builder.addCase(fetchCategoriedCats.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const catsReducer = catsSlice.reducer;
export const { setCategoryId } = catsSlice.actions;
