import React, { useState } from 'react';
import './App.css';
import TodoList from './todoList';

const App = () =>  {

  const [inputList, setInputList] =useState("");
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
 setInputList(event.target.value);
  };

const listOfItems = () => {
  setItems((oldItems) => {
return [...oldItems, inputList];
  });
  setInputList("");
};


const deleteItem = (id) => {
   setItems ((oldItems) => {
     return oldItems.filter((arrElem, index) =>{
      return index !== id ;
     });
   });
  };

  return (
    <div className="main-div">
     <div className="center-div">
       <br/>
    <h1> Todo List</h1>
    <br/>
<input type="text" placeholder="enter items" value={inputList} onChange={itemEvent}
 
/>
    <button onClick={listOfItems}>+</button>

      <ol>
        {/* <li>{inputList} </li> */}

    {Items.map((itemval, index)=>{
    return <TodoList key={index} id={index}
      text={itemval}
      onSelect={deleteItem}
      />


    })}

      </ol>
       </div>
    </div>
  );
}

export default App;
