import {configureStore} from '@reduxjs/toolkit'
import questionSlice from './questions-slice';
import candidatesSlice from './candidates-slice';
import questionListSlice from './questionList-slice';
import liveQuizFinishSlice from './liveQuizFinish-slice';

const store = configureStore({
    reducer : { questionList: questionListSlice , question: questionSlice, candidates: candidatesSlice,liveQuizFinish:liveQuizFinishSlice }
})

export default store;