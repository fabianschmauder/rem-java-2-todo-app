function Input({addToDo}){
    let inputText = ""
    return(
    <div>
        <input onChange={(event) => inputText = event.target.value}/>
        <button onClick ={() => addToDo( inputText )}>Add</button>
    </div>
    )
}
export default Input