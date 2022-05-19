import React from 'react';
import './TodoList.css'
const TodoList = ({addList, removeList}) => {
    const handleClick = () => {
          removeList(addList.id);
    }
    return (
        <li key={addList.id}><div className="item_list">{addList.todoText}</div>
            <button onClick={handleClick}>X</button>
        </li>
    );
};
export default TodoList;