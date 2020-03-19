import React from "react";
import {useDispatch} from "react-redux";
import {handleFilterType} from '../actions/filterActions';
import './filterBar.css'

export default () => {
  const dispatch = useDispatch();
  const onHandleFilterType = (filterType) => dispatch(handleFilterType(filterType));
  return <div className={'button-group'}>
    <button onClick={onHandleFilterType.bind(null, 'all')}>全部</button>
    <button onClick={onHandleFilterType.bind(null, 'finished')}>已完成</button>
    <button onClick={onHandleFilterType.bind(null, 'unfinished')}>未完成</button>
  </div>
}
