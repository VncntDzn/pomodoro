import { createSlice, } from '@reduxjs/toolkit';


const initialState = {
    status: 'idle',
    error: null,
    seconds: 0,
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    todos: [],
    addedTodos: []


};

const pomodoroSlice = createSlice({
    // prefix for the reducers
    name: "pomodoro",
    // redux state
    initialState,
    reducers: {
        getPomodoroTimes: (state, action) => {
            state.pomodoroTime = action.payload.pomodoro;
            state.shortBreakTime = action.payload.shortBreak;
            state.longBreakTime = action.payload.longBreak;
        },
        getTodos: (state, action) => {
            const items = JSON.parse(localStorage.getItem("todo"));
            state.todos = items;

        },
        addTodo: (state, action) => {
            state.addedTodos.push(action.payload);
            localStorage.setItem('todo', JSON.stringify(state.addedTodos))

        },
        editTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
            localStorage.setItem('todo', JSON.stringify(state.todos));

        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
            localStorage.setItem('todo', JSON.stringify(state.todos));

        },
    },

})

const { actions, reducer } = pomodoroSlice;
export default reducer;
// reducers
export const { getPomodoroTimes, addTodo, getTodos, deleteTodo, editTodo } = actions;