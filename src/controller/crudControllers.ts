
import { Router, Request, Response, NextFunction } from "express";
import Todo from "../model/todoModel";

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.create({ title, description });
        res.status(201).json({ 
            status: "successfully created!",
            todo
         });
    } catch (error) {

        next(error);
    }
};

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({ todos });
    } catch (error) {
        next(error);
    }
}

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, { title}, { new: true });
        res.status(200).json({ todo });
    } catch (error) {
        next(error);
    }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({ todo });
    } catch (error) {
        next(error);
    }
}

