import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.products = action.payload;
    },
    [fetchProducts.rejected]: setError,
  },
});

export const productReducer = productSlice.reducer


