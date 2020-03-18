import React, {memo} from "react";
import './todoItem.css'

export default memo(({item, handleRemove, handleToggle}) =>
  <div className={'todo-item'}>
    <input
      type="radio"
      className={'todo-item-input'}
      checked={item.finish}
      readOnly={true}
    />
    <p
      onClick={handleToggle.bind(null, item.id)}
      className={item.finish ? 'finish' : ''}
    >
      {item.content}
    </p>
    <span onClick={handleRemove.bind(null, item.id)}>X</span>
  </div>
)
