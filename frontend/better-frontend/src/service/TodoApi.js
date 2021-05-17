import axios from "axios";

export const getTodosApi = () => axios.get("/api/todo").then((response) => response.data);

export const getTodoByIdApi = (id) => axios.get("/api/todo/" + id).then((response) => response.data);

export const addTodoApi = (todo) => axios.post("/api/todo/", todo).then((response) => response.data);

export const updateTodoApi = (todo) => axios.put("/api/todo/"+ todo.id, todo).then((response) => response.data);

export const deleteTodoApi = (id) => axios.delete("/api/todo/" + id).then((response) => response.data);
