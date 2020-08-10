import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createSelector} from 'reselect'
import TodoItem from './todoItem/todoItem';
import {addTodo, delayAddTodo} from './todoListSlice';
import {RootState} from '../../store/store';
import './todoList.css'


const selectList = createSelector(
  (state:RootState)  => state.filterType.filterType,
  (state:RootState)  => state.todo.todoList,
  (_:RootState, props:string) => console.log('say:', props),
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
    if(!value)return;
    dispatch(addTodo(value));
    setValue('')
  };

  const onDelayAddTodo = () =>{
    if(!value)return;
    dispatch(delayAddTodo(value));
    setValue('')
  };

  const todoList = useSelector((state:RootState) => state.todo.todoList);
  const filterType = useSelector((state:RootState)  => state.filterType.filterType);
  const list2 = useMemo(() => {
    console.log('calculation from using memory');
    return todoList.filter(item => {
      return filterType === 'all' ? true : filterType === 'finished' ? item.finish : !item.finish
    })
  }, [todoList, filterType]);

  // const list = useSelector(selectList);
  const list = useSelector((state:RootState) => selectList(state, 'hey'));

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
    <div className='add-button-group'>
      <button
        className={'button'}
        onClick={onAddTodo}
      >
        新增
      </button>
      <button
        className={'button'}
        onClick={onDelayAddTodo}
      >
        等下再加
      </button>
    </div>
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
