import { createSlice } from "@reduxjs/toolkit";

const questionListSlice = createSlice({
    name:'questionList',
    initialState:{questionareClicked:false,candidatesClicked:false},
    reducers:{
        setQuestionareClicked : (state,action) => {
            state.questionareClicked = action.payload;
        },
        setCandidatesClicked : (state,action) => {
            state.candidatesClicked = action.payload;
        },
    }
})

export const {setQuestionareClicked,setCandidatesClicked} = questionListSlice.actions

export default questionListSlice.reducer