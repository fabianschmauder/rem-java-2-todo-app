
function ToDoCard ({toDo, deleteTodo, updateTodo}) {
    return(
        <div>
            <p>{toDo.description}</p>
            <p>{toDo.id}</p>
            <p>{toDo.status}</p>
            <button onClick={() => deleteTodo(toDo.id)}>Delete</button>
            <button>Details</button>
            <button onClick={() => updateTodo(toDo)} disabled={toDo.status === "DONE"}>Advance</button>
        </div>
    )
}

export default ToDoCard;

