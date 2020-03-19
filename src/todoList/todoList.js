import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createSelector} from 'reselect'
import TodoItem from './todoItem/todoItem';
import {addTodo} from '../actions/todoActions';
import './todoList.css'


const selectList = createSelector(
  state => state.filterType.filterType,
  state => state.todo.todoList,
  (_, props) => console.log('say:', props),
  (filterType, todoList) => {
    console.log('calculation from reselect');
    return todoList.filter(item => {
      return filterType === 'all' ? true : filterType === 'finished' ? item.finish : !item.finish
    })
  }
);

export default () => {
  const [value, setValue] = useState('nothings');
  const handleInput = useCallback((event) => setValue(event.target.value), []);
  const dispatch = useDispatch();
  const onAddTodo = () => {
    dispatch(addTodo(value));
    setValue('')
  };

  const todoList = useSelector(state => state.todo.todoList);
  const filterType = useSelector(state => state.filterType.filterType);
  const list2 = useMemo(() => {
    console.log('calculation from using memory');
    return todoList.filter(item => {
      return filterType === 'all' ? true : filterType === 'finished' ? item.finish : !item.finish
    })
  }, [todoList, filterType]);

  // const list = useSelector(selectList);
  const list = useSelector(state => selectList(state, 'hey'));

  useEffect(() => {
    console.log('update')
  });

  useEffect(() => {
    console.log('component did mount');
    return () => {
      console.log('component will unmount');
    }
  }, []);


  return <div className={'todo-list'}>
    <input
      type="text"
      className={'todo-list-input'}
      onChange={handleInput}
      value={value.slice(0, 20)}
    />
    <button
      className={'button'}
      onClick={onAddTodo}
    >
      新增
    </button>
    <div className='list-group'>
      <div className='list-group-left'>
        {list.map(item => <TodoItem item={item} key={item.id}/>)}
      </div>
      <div>
        {list2.map(item => <TodoItem item={item} key={item.id}/>)}
      </div>

    </div>


  </div>

}
