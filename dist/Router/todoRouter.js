import express from "express";
import { createTodo } from "../controller/todoController.js";
const todoRoute = express.Router();
todoRoute.post("/new", createTodo);
export default todoRoute;
//# sourceMappingURL=todoRouter.js.map