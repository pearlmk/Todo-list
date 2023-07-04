
import { useState } from 'react';
import './App.css';
import Inputarea from './components/Inputarea';
import TodoItem from './components/TodoItem';

function App() {
  const [items,setItem] = useState([])

  const addItems = (inputText) =>{
      setItem((prevItems)=>{
        return [...prevItems,inputText]
      })
  };
  const deleteItem = (id) =>{
    setItem((prevItems) =>{
      return prevItems.filter((item,index)=>{
         return index!==id;
      })
    })
  }
  return (
    <div className="container">
         <div className='heading'>  
          <h3>To-Do List</h3>
         </div>
         <Inputarea addItems={addItems} />
         <div>
          <ul>
            { items.map((item,index)=>{
              return <TodoItem text={item} key={index} deleteItem={deleteItem} id={index} />
            })}
          </ul>
         </div>
    </div>

  );
}

export default App;
