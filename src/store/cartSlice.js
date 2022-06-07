import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {
    addToCart(state, action) {
      console.log(state, action.payload);

      const { id } = action.payload;

      const find = state.find((item) => item.id === id);

      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    increment(state, action) {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    },
    decrement(state, action) {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    },
    clear(state) {
      return [];
    },
  },
});

export const { addToCart, increment, decrement, clear } = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer