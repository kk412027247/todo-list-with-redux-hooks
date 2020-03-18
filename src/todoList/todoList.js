import React, {useState, useCallback} from 'react';
import {useSelector} from "react-redux";
import TodoItem from './todoItem/todoItem';
import './todoList.css'

let i = 0;
//
//
// export default class TodoList extends React.Component {
//
//   state = {
//     list: [{id: 0, content: 'hehe', finish: true}],
//     value: '',
//     status:'all',
//   };
//
//   handleInput = (event) => {
//     this.setState({value: event.target.value})
//   };
//
//   handleAdd = () => {
//     const {value, list} = this.state;
//     if (value === '') {
//       return
//     }
//     const newList = [...list, {content: value, finish: false, id: ++i}];
//     this.setState({list: newList, value: ''});
//   };
//
//   handleRemove = (id) => {
//     const list = this.state.list.filter(item => item.id !== id);
//     this.setState({list})
//   };
//
//   handleToggle = (id) => {
//     const list = this.state.list.map(item => {
//       if (item.id === id) {
//         return {
//           ...item, finish: !item.finish
//         }
//       }
//       return item;
//     });
//     this.setState({list})
//   };
//
//   handleStatus = (status) => {
//     this.setState({status})
//   };
//
//   render() {
//     const {value, list, status} = this.state;
//     return (
//       <div className={'todo-list'}>
//         <input
//           type="text"
//           className={'todo-list-input'}
//           onChange={this.handleInput}
//           value={value.slice(0, 20)}
//         />
//         <button
//           className={'button'}
//           onClick={this.handleAdd}
//         >
//           新增
//         </button>
//         <div className={'button-group'}>
//           <button onClick={this.handleStatus.bind(null, 'all')}>全部</button>
//           <button onClick={this.handleStatus.bind(null,'finished')}>已完成</button>
//           <button onClick={this.handleStatus.bind(null,'unfinishde')}>未完成</button>
//         </div>
//         {
//           list.filter(item=>{
//             if(status === 'all'){
//               return true
//             }else if (status === 'finished') {
//               return item.finish
//             }else{
//               return !item.finish
//             }
//           }).map(item =>
//             <TodoItem
//               item={item}
//               key={item.id}
//               handleRemove={this.handleRemove}
//               handleToggle={this.handleToggle}
//             />
//           )
//         }
//
//       </div>
//     )
//   }
// }

const fn = () => {
}

export default () => {

  const [value, setValue] = useState('do nothings');
  const handleInput = useCallback((event) => setValue(event.target.value),[]);


  const todoList = useSelector(state => state.todo.todoList);
  const status = 'all'

  return <div className={'todo-list'}>
    <input
      type="text"
      className={'todo-list-input'}
      onChange={handleInput}
      value={value.slice(0, 20)}
    />
    <button
      className={'button'}
      onClick={fn}
    >
      新增
    </button>
    <div className={'button-group'}>
      <button onClick={fn}>全部</button>
      <button onClick={fn}>已完成</button>
      <button onClick={fn}>未完成</button>
    </div>
    {
      todoList.filter(item => {
        if (status === 'all') {
          return true
        } else if (status === 'finished') {
          return item.finish
        } else {
          return !item.finish
        }
      }).map(item =>
        <TodoItem
          item={item}
          key={item.id}
          handleRemove={fn}
          handleToggle={fn}
        />
      )
    }

  </div>

}
