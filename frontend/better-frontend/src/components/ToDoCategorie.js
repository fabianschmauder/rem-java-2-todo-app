import ToDoCard from "./ToDoCard";

function ToDoCategorie ({todos, categorieName}) {
    return(
        <div>
            <p>{categorieName}</p>
            {todos.map((todo) => <ToDoCard toDo={todo} key={todo.id}/>)}
        </div>
    )
}

export default ToDoCategorie;