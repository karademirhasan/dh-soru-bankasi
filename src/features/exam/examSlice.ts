import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserAnswers = Record<number, string>;
export interface IExamState {
  is_show_answers: boolean;
  active_question_id: number;
  user_answers: UserAnswers;
  show_correct_answers?: boolean;
}

const initialState: IExamState = {
  is_show_answers: false,
  active_question_id: 1,
  show_correct_answers: false,
  user_answers: {},
};

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    resetState: state => {
      state.is_show_answers = initialState.is_show_answers;
      state.active_question_id = initialState.active_question_id;
      state.user_answers = initialState.user_answers;
    },
    updateActiveQuestionID: (state, action: PayloadAction<number>) => {
      state.active_question_id = action.payload;
    },
    updateUserAnswers: (state, action: PayloadAction<{ question_id: number; option_key: string }>) => {
      const { question_id, option_key } = action.payload;
      state.user_answers = {
        ...state.user_answers,
        [question_id]: option_key,
      };
    },
    changeShowedAnswers: state => {
      state.show_correct_answers = !state.show_correct_answers;
    },
  },
});

export const { resetState, updateActiveQuestionID, updateUserAnswers, changeShowedAnswers } = examSlice.actions;

export default examSlice.reducer;
