import { Router, Request, Response, NextFunction } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controller/crudControllers";

const router = Router();

router.get("/get-todo", getTodos )

router.post("/create-todo", createTodo)

router.patch("/update-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default Router;