import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenSidebar: false,
  isLoading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleSidebar, toggleLoading } = uiSlice.actions;

export default uiSlice.reducer;
