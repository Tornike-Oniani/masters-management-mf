import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    title: 'Manage Organizations',
    crumbs: [
      {
        path: '/',
        label: 'Organizations',
      },
    ],
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateCrumbs: (state, action) => {
      state.crumbs = action.payload;
    },
  },
});

export const { updateTitle, updateCrumbs } = headerSlice.actions;

export default headerSlice.reducer;
