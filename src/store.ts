import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import examSlice from 'features/exam/examSlice';
import { useSelector } from 'react-redux';
import uiSlice from 'features/exam/uiSlice';

const store = configureStore({
  reducer: {
    exam: examSlice,
    ui: uiSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
