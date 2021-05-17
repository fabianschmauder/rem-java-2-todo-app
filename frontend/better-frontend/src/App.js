
import './App.css';
import ToDoList from "./components/ToDoList";
import {useEffect, useState} from "react";
import {getTodosApi} from "./service/TodoApi";

function App() {
  const [todos, setTodos] = useState([{description: "des", id: "123", status:"OPEN"}]);

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = () => {getTodosApi().then((data ) => setTodos(data))};

  const addTodo = (description) => {};
  const advanceTodo = (id) => {};
  const deleteTodo = (id) => {};

  return (
    <div className="App">
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
