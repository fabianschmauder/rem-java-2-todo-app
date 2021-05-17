import ToDoCard from "./ToDoCard";

function ToDoCategorie ({todos, categorieName, updateTodo, deleteTodo}) {
    return(
        <div>
            <p>{categorieName}</p>
            {todos.map((todo) => <ToDoCard updateTodo={updateTodo} deleteTodo={deleteTodo} toDo={todo} key={todo.id}/>)}
        </div>
    )
}

export default ToDoCategorie;