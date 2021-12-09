import {configureStore} from '@reduxjs/toolkit'
import questionSlice from './questions-slice';
import candidatesSlice from './candidates-slice';
import questionListSlice from './questionList-slice';
import liveQuizFinishSlice from './liveQuizFinish-slice';
import startLiveQuizSlice from './startLiveQuiz-slice'

const store = configureStore({
    reducer : { questionList: questionListSlice , question: questionSlice, candidates: candidatesSlice,liveQuizFinish:liveQuizFinishSlice, startLiveQuiz: startLiveQuizSlice }
})

export default store;