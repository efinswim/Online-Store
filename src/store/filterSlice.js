import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: {
    name: '',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory(state, action) {
      console.log('state', state)
      console.log('action', action)
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = filterSlice.actions;

export default filterSlice.reducer;
