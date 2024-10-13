import { createSlice } from '@reduxjs/toolkit';
import { MAX_ZOOM_LEVEL } from 'constant/global';

export type UserAnswers = Record<number, string>;
export interface IUIState {
  zoom_level: number;
}

const initialState: IUIState = {
  zoom_level: 4,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    increaseZoomLevel: state => {
      if (state.zoom_level >= MAX_ZOOM_LEVEL) return;
      state.zoom_level = state.zoom_level + 1;
    },
    decreaseZoomLevel: state => {
      if (state.zoom_level <= 1) return;
      state.zoom_level = state.zoom_level - 1;
    },
  },
});

export const { increaseZoomLevel, decreaseZoomLevel } = uiSlice.actions;

export default uiSlice.reducer;
