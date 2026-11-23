import express from "express";
import { createTodo, deleteAllTodo, deleteTodo, getAllTodo, updateTodo } from "../controller/todoController.ts";


const todoRoute = express.Router();

todoRoute.post("/new",createTodo);
todoRoute.get("/getAll",getAllTodo);
todoRoute.put("/updateTodo/:id",updateTodo);
todoRoute.delete("/delete/:id",deleteTodo);
todoRoute.delete("/deleteAll",deleteAllTodo);

export default todoRoute;