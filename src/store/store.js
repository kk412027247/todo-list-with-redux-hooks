import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import todoReducer from "../reducers/todoReducer";
import filterReducer from "../reducers/filterReducer";

const reducer = combineReducers({
  todo: todoReducer,
  filterType: filterReducer
});

const initState = {
  todo: {
    todoList: [{id: 0, content: 'being suck', finish: true}]
  },
  filterType: {
    filterType: 'all'
  }
};

const enhancer = compose(applyMiddleware(thunk));


export default createStore(reducer, initState, enhancer)
