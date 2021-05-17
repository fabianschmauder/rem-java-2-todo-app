import ToDoCategorie from "./ToDoCategorie";

function ToDoList({todos}) {
    return (
        <div>
            <ToDoCategorie key = {"open"} categorieName={"open"} todos={todos.filter((todo) => todo.status === "OPEN")}/>
            <ToDoCategorie key = {"doing"} categorieName={"doing"} todos={todos.filter((todo) => todo.status === "IN_PROGRESS")}/>
            <ToDoCategorie key = {"done"} categorieName={"done"} todos={todos.filter((todo) => todo.status === "DONE")}/>
        </div>)
}

export default ToDoList;