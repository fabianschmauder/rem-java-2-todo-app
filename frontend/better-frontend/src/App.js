import './App.css';
import ToDoList from "./components/ToDoList";
import {useEffect, useState} from "react";
import {addTodoApi, deleteTodoApi, getTodosApi, updateTodoApi} from "./service/TodoApi";


export default function App() {

  const [todos, setTodos] = useState([{description: "des", id: "123", status:"OPEN"}]);

  const addTodo = (description) => {addTodoApi({description: description, status:"OPEN"}).then((todo) => setTodos(todos.push(todo)))};
  const advanceTodo = (todo) => {
    if (todo.status === "OPEN") {
      todo.status = "IN_PROGRESS";
    }
    else if (todo.status === "IN_PROGRESS") {
      todo.status = "DONE"
    }
    updateTodoApi(todo)
        .then((newTodo) => {
          setTodos(
              todos.splice(
                  todos.findIndex((todo) => todo.id === newTodo.id), 1, newTodo
              )
          )
    })
  };
  const deleteTodo = (id) => {
    deleteTodoApi(id)
        .then(() => {
          setTodos(todos.splice(todos.findIndex((todo) => todo.id === id), 0))
        })};

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = () => {getTodosApi().then((data ) => setTodos(data))};


  return (
    <div className="App">
      <ToDoList todos={todos} updateTodo={advanceTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}