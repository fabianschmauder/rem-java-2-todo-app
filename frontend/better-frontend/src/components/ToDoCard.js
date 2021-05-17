
function ToDoCard ({toDo}) {
    return(
        <div>
            <p>{toDo.description}</p>
            <p>{toDo.id}</p>
            <p>{toDo.status}</p>
        </div>
    )
}

export default ToDoCard;

