import React from 'react';
import {useState} from "react";
import './TodoForm.css';
const TodoForm = ({addlist}) => {
    const [inputVal, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addlist(inputVal);
        setInput('');
    }
    return (


            <form onSubmit={handleSubmit}>
                <input
                    value={inputVal}
                    type="text"
                    onChange={handleChange}
                    placeholder="Please input value"
                />
                <button>Add</button>
            </form>

    );
};

export default TodoForm;