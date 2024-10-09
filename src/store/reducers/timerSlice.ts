import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { listQuestions1 } from '../../data/listQuestions';


interface initialQuestionsStateProps {
  totalSeconds?: number;
}

const initialQuestionsState: initialQuestionsStateProps = {
  totalSeconds: listQuestions1.totalSeconds,
};

export const timerSlice = createSlice({
    name: 'timerSlice',
    initialState: {
      ...initialQuestionsState,
    },
    reducers: {
      setSeconds(state, action: PayloadAction<number>) {
        state.totalSeconds = action.payload;
      },
    },
  })
;

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
