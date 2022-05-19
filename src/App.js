import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";
function App() {
    const [todo, setTodo] = useState([]);
    const addList = (valueInput) => {
        const objList = {id: Math.random(), todoText: valueInput}
        if (valueInput) {
            setTodo([...todo, objList]);
        }
    }
    const removeList = (id) => {
        setTodo([...todo].filter((todo) => todo.id !== id));
    }
    return (
        <div className="App">
            <div className="wrapper">
            <TodoForm addlist={addList}/>
            <ul>{todo.map((value) => {
                return <TodoList key={value.id} addList={value} removeList={removeList}/>
            })}</ul>
        </div>
        </div>
    );
}

export default App;
