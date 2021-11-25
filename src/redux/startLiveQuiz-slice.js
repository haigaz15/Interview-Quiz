import { createSlice } from "@reduxjs/toolkit";

const initialState =  {open: false, arrOfOptions: [], questions: [
    [
      {
        value: 'What is Js',
        label: 'What is Js',
      },
      {
        value: 'What is ReactJs',
        label: 'What is ReactJs',
      },
      {
        value: 'What is OOP',
        label: 'What is OOP',
      },
    ],
  ]};

const startLiveQuizSlice  = createSlice({
    name: 'StartLiveQuiz',
    initialState,
    reducers: {setArrOfOptions: (state , action) => {
        state.arrOfOptions = action.payload;
      },
      setOpen: (state, action) => {
          state.open = action.payload
      },
      setChangeQuestions:(state, action) => {
          state.questions = action.payload;
      }
     },
})

export const { setArrOfOptions, setOpen, setChangeQuestions}= startLiveQuizSlice.actions;
export default startLiveQuizSlice.reducer;