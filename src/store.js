import { configureStore } from '@reduxjs/toolkit';
import examSlice from 'features/ui/examSlice';

const store = configureStore({
  reducer: {
    exam: examSlice,
  },
});

export default store;
