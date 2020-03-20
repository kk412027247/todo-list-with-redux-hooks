import {createSlice} from '@reduxjs/toolkit'

let id = 1;

const todoListSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [{id: 0, content: 'being suck', finish: true}]
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        const {id, content} = action.payload;
        state.todoList.push({id, content, finish: false})
      },
      prepare(content) {
        return {payload: {content, id: id++}}
      }
    },
    toggleTodo(state, action) {
      const todo = state.todoList.find(item => item.id === action.payload);
      if (todo) {
        todo.finish = !todo.finish
      }
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(item => item.id !== action.payload)
    }
  }
});

export const {addTodo, toggleTodo, removeTodo} = todoListSlice.actions;

export default todoListSlice.reducer

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const delayAddTodo = (content) => async(dispatch, getState) => {
  console.log(getState());
  await delay(1000);
  dispatch(addTodo(content))
};
