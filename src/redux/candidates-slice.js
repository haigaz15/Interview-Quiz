import { createSlice } from "@reduxjs/toolkit";

const candidatesSLice = createSlice({
    name:'candidates',
    initialState:{fullName:'',email:'',level:'',year:'',skill:'',notes:''},
    reducers:{
        handleName: (state,action) => {
            state.fullName = action.payload;
        },
        handleMail: (state, action) => {
            state.email = action.payload
        },
        handleLevel: (state,action) => {
            state.level = action.payload;
        },
        handleYear: (state,action) => {
            state.year = action.payload;
        },
        handleSkill: (state,action) => {
            state.skill = action.payload;
        },
        handleNotes: (state,action) => {
            state.notes = action.payload;
        },
        
    }
})

 export const  { handleName,handleMail,handleLevel,handleYear,handleSkill,handleNotes } = candidatesSLice.actions;

 export  default candidatesSLice.reducer;