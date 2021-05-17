import ToDoCategorie from "./ToDoCategorie";

function ToDoList({todos, updateTodo, deleteTodo}) {
    return (
        <div>
            <ToDoCategorie key = {"open"} updateTodo={updateTodo} deleteTodo={deleteTodo} categorieName={"open"} todos={todos.filter((todo) => todo.status === "OPEN")}/>
            <ToDoCategorie key = {"doing"} updateTodo={updateTodo} deleteTodo={deleteTodo} categorieName={"doing"} todos={todos.filter((todo) => todo.status === "IN_PROGRESS")}/>
            <ToDoCategorie key = {"done"} updateTodo={updateTodo} deleteTodo={deleteTodo} categorieName={"done"} todos={todos.filter((todo) => todo.status === "DONE")}/>
        </div>)
}

export default ToDoList;