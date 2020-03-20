import {combineReducers} from 'redux';
import todoReducer from "../feature/todoList/todoListSlice";
import filterReducer from "../feature/filterBar/filterBarSlice";

export default combineReducers({
  todo:todoReducer,
  filterType:filterReducer
})
