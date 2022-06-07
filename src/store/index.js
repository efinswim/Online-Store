import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productSlice';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});
