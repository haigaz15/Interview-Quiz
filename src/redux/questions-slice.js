import { createSlice } from "@reduxjs/toolkit";
import {data} from '../datas/datas'
const initialState = {level: '', skill:'' , question: '', open:false, questionData:data,filteredData:data,filteredLevel:'',filteredSkill:''}
const questionSlice = createSlice(
    {
    name:'questions',
    initialState,
    reducers:{
        handleLevel : (state , action) => {
            state.level = action.payload;
          },
        handleSkill : (state , action) => {
            state.skill = action.payload;
        },
        handleQuestion : (state , action) => {
            state.question = action.payload;
        },
        setOpen : (state, action) => {
            state.open = action.payload
        },
        setQuestionData : (state,action) => {
            state.questionData = action.payload;
        },
        setFilteredData : (state,action) => {
            state.filteredData = action.payload;
        },
        setFilteredLevel : (state,action) => {
            state.filteredLevel = action.payload;
        },
        setFilteredSkill: (state,action) => {
            state.filteredSkill = action.payload
        }
    }
})



export const {handleLevel,handleSkill,handleQuestion,setOpen,setQuestionData,setFilteredData,setFilteredLevel,setFilteredSkill} = questionSlice.actions

export default questionSlice.reducer;