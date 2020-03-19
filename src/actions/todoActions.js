let id = 1;

export const addTodo = (content) => (dispatch)=>{
  if(!content) return;
  dispatch({
    type: 'ADD_TODO',
    todoItem: {id: ++id, content, finish: false}
  })
};

export const toggleTodo = (id) => ({
  type:'TOGGLE_TODO',
  id
});

export const removeTodo = id => ({
  type:'REMOVE_TODO',
  id
});
