import React, { useState } from 'react';
import CustomInput from './components/CustomInput/CustomInput';
import ToDoList from './components/ToDoList/ToDoList';
import ModeComponent from './components/ModeComponent/ModeComponent';
import { MODE } from './constant';
import './App.scss';
import './sass/index.scss'


// ToDoItemModel = {name: string, isChecked: boolean}

const App = () => {
  const [todoList, setTodoList] = useState([{name: 'Test', isChecked: true}])
  const [todoListSearchResult, setTodoListSearchResult] = useState([])
  const [mode, setMode] = useState(MODE.ADD)

  const handleSearchTodo = (value) => {
    const newTodoList = todoList.filter((item) => item.name.includes(value))
    
    setTodoListSearchResult(newTodoList)
  }

  const handleAddTodo = (newItem) => {
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

  const onChangeMode = (value) => {
    setMode(value)
    setTodoListSearchResult(todoList)
  }

  return (
    <div className="todo-component">
      <h1>To do list</h1>
      <ModeComponent mode={mode} onChangeMode={onChangeMode}/>
      <div className="todo-component__input">
        <CustomInput onSubmit = {mode === MODE.ADD ? handleAddTodo: handleSearchTodo} mode = {mode}/>
      </div>
      <div className="todo-component__list">
        <ToDoList data={mode === MODE.ADD ? todoList : todoListSearchResult} toggleCheck={toggleCheck} deleteItem={deleteItem}/>
      </div>
    </div>
  );
}

export default App;
