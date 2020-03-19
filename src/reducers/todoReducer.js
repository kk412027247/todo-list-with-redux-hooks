export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todoList: [...state.todoList, action.todoItem]
      }
    }

    case 'TOGGLE_TODO': {
      return {
        ...state,
        todoList: state.todoList.map(item => {
          return item.id === action.id ? {...item, finish: !item.finish} : item
        })
      }
    }

    case 'REMOVE_TODO':{
      return{
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.id)
      }
    }

    default:
      return state;
  }
}
