import React, { useState } from 'react';
import './App.css';
import './sass/index.scss'
import CustomInput from './components/CustomInput/CustomInput';
import ToDoList from './components/ToDoList/ToDoList';
import { MODE } from './constant';


// ToDoItemModel = {name: string, isChecked: boolean}

const App = () => {
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = (newItem) => {
    console.log("index", newItem)

    setTodoList([...todoList, {...newItem}])
  }

  const toggleCheck = (index) =>{
    const newTodoList = todoList.map((item, itemIndex) => {
      if (index === itemIndex)  {
        return {...item, isChecked: !item.isChecked}
      }
      return item
    })

    setTodoList(newTodoList)
  }

  const deleteItem = (index) => {
    const newTodoList = todoList.filter((_item, itemIndex) => itemIndex !== index)

    setTodoList(newTodoList)

  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <CustomInput onSubmit = {handleAddTodo} mode = {MODE.ADD}/>
      <ToDoList data={todoList} toggleCheck={toggleCheck} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
