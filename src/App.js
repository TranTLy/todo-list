import React, { useState, useEffect } from 'react';
import CustomInput from './components/CustomInput/CustomInput';
import ToDoList from './components/ToDoList/ToDoList';
import ModeComponent from './components/ModeComponent/ModeComponent';
import { MODE } from './constant';
import './App.scss';
import './sass/index.scss'
import Heading from './components/Heading/Heading';
import Footer from './components/Footer/Footer';

// ToDoItemModel = {name: string, isChecked: boolean, id: number}

const App = () => {
  const [todoList, setTodoList] = useState([{name: 'Learning HTML/CSS', isChecked: false, id: 0}])
  const [todoListSearchResult, setTodoListSearchResult] = useState([])
  const [keyword, setKeyword] = useState("")
  const [idCount, setIdCount] = useState(1)
  const [mode, setMode] = useState(MODE.ADD)

  useEffect(()=>{ 
    if (mode === MODE.SEARCH) {
      const reseachTodoList = () => {
        if (keyword) {
          const newTodoList = todoList.filter((item) => item.name.includes(keyword))
          setTodoListSearchResult(newTodoList)
        } else {
          setTodoListSearchResult(todoList)
        }
      }
      reseachTodoList()
    }
  }, [todoList, mode, keyword])



  const handleSearchTodo = (value) => {
    setKeyword(value)
  }


  const handleAddTodo = (newItem) => {
    setTodoList([...todoList, {...newItem, id: idCount}])
    setIdCount(idCount+1)
  }

  const toggleCheck = (id) =>{
    const newTodoList = todoList.map((item) => {
      if (id === item.id)  {
        return {...item, isChecked: !item.isChecked}
      }
      return item
    })
    

    setTodoList(newTodoList)
  }

  const deleteItem = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }

  const onChangeMode = (value) => {
    setMode(value)
    setTodoListSearchResult(todoList)
  }

  return (
    <div className="todo-component">
      <div className="todo-component__heading">
        <Heading>Todo List</Heading>
      </div>
      <ModeComponent mode={mode} onChangeMode={onChangeMode}/>
      <div className="todo-component__input">
        <CustomInput onSubmit = {mode === MODE.ADD ? handleAddTodo: handleSearchTodo} mode = {mode}/>
      </div>
      <div className="todo-component__list">
        <ToDoList data={mode === MODE.ADD ? todoList : todoListSearchResult} toggleCheck={toggleCheck} deleteItem={deleteItem}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
