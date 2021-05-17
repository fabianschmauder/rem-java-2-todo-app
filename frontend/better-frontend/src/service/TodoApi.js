import axios from "axios";

export const getTodosApi = () => axios.get("/api/todo").then((response) => response.data);