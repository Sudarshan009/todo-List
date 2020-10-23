import React from 'react';

const TodoLists = (props) => {

 return (
    <div className="todo_style">
      <span onClick={() => {
          props.onSelect(props.id);
      }}>X</span>
    <li>{props.text} </li>
 </div>
 );
}

export default TodoLists;