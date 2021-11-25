import { createSlice } from "@reduxjs/toolkit";

const liveQuizFinishSlice = createSlice({
    name:'liveQuizFinish',
    initialState: { candidatesData: []},
    reducers:{
        setCandidatesData: (state,action) => {
            state.candidatesData = action.payload ;
        }
    }
})

export const {setCandidatesData} = liveQuizFinishSlice.actions;

export default liveQuizFinishSlice.reducer;