import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestItem } from '../../types/questionType';
import { listAnswer1, listQuestions1 } from '../../data/listQuestions';

interface initialQuestionsStateProps {
  questions: TestItem[];
  numberQuestion: number;
  currentQuestion: TestItem;
  selectedValue: TestItem;
  isStartTest: boolean;
}

const initialQuestionsState: initialQuestionsStateProps = {
  questions: listQuestions1.test,
  numberQuestion: 0,
  currentQuestion: listQuestions1.test[0],
  selectedValue: listAnswer1[0],
  isStartTest: false,
};

export const questionsSlice = createSlice({
    name: 'questionsSlice',
    initialState: {
      ...initialQuestionsState,
    },
    reducers: {

      nextQuestion(state) {
        state.selectedValue.answers = '';
        state.numberQuestion = state.numberQuestion + 1;
      },
      setSelectedValue(state, action: PayloadAction<string | string[]>) {
        Array.isArray(action.payload) ?
          state.selectedValue.answers = [...action.payload]
          :
          state.selectedValue.answers = action.payload;
      },
      resetTest(state) {
        state.numberQuestion = 0;
        state.currentQuestion = listQuestions1.test[0];
        state.selectedValue = listAnswer1[0];
      },
      setIsStartTest(state) {
        state.isStartTest = true;
      },

      setIsStopTest(state) {
        state.isStartTest = false;
      },

    },
  })
;

export const questionsActions = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
