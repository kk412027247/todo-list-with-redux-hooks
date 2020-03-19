import React, {memo} from "react";
import {useDispatch} from "react-redux";
import {toggleTodo, removeTodo} from '../../actions/todoActions';
import './todoItem.css'

export default memo(({item}) => {
  const dispatch = useDispatch();
  const {id} = item;
  const onToggle = () => dispatch(toggleTodo(id));
  const onRemove = () => dispatch(removeTodo(id));
  return <div className={'todo-item'}>
    <input
      type="radio"
      className={'todo-item-input'}
      checked={item.finish}
      readOnly={true}
    />
    <p
      onClick={onToggle}
      className={item.finish ? 'finish' : ''}
    >
      {item.content}
    </p>
    <span onClick={onRemove}>X</span>
  </div>
})
