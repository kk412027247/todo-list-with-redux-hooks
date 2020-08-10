import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppThunk} from "../../store/store";

let id:number = 1;

export interface TodoItemType {
  id:number, content:string, finish:boolean
}

interface TodoListState {
  todoList:Array<TodoItemType>
}

const initialState:TodoListState = {
  todoList: [{id: 0, content: 'being suck', finish: true}]
}

const todoListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action:PayloadAction<{id:number, content:string}>) {
        const {id, content} = action.payload;
        state.todoList.push({id, content, finish: false})
      },
      prepare(content:string) {
        return {payload: {content, id: id++}}
      }
    },
    toggleTodo(state, action:PayloadAction<number>) {
      const todo = state.todoList.find(item => item.id === action.payload);
      if (todo) {
        todo.finish = !todo.finish
      }
    },
    removeTodo(state, action:PayloadAction<number>) {
      state.todoList = state.todoList.filter(item => item.id !== action.payload)
    }
  }
});

export const {addTodo, toggleTodo, removeTodo} = todoListSlice.actions;

export default todoListSlice.reducer

const delay = (ms: number):Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export const delayAddTodo = (content: string): AppThunk => async(dispatch, getState) => {
  console.log(getState());
  await delay(1000);
  dispatch(addTodo(content))
};
