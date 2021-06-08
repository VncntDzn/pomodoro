
import { configureStore } from '@reduxjs/toolkit';
import pomodoroSlice from './pomodoroSlice'

const store = configureStore({
    reducer: pomodoroSlice

});


export default store;