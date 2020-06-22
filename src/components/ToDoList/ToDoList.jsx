import React from 'react';
import ToDoItem from '../TodoItem/TodoItem'

const TodoList = ({ data, toggleCheck, deleteItem}) => {
    return (
        <div className="to-do-list">
            {
                (data||[]).map((item, index) => (
                    <ToDoItem key={index} {...item} toggleCheck={toggleCheck} deleteItem={deleteItem}/>
                ))
            }
        </div>
    );
}

export default TodoList;