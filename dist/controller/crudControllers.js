"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const todo = yield todoModel_1.default.create({ title, description });
        res.status(201).json({
            status: "successfully created!",
            todo
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createTodo = createTodo;
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoModel_1.default.find({});
        res.status(200).json({ todos });
    }
    catch (error) {
        next(error);
    }
});
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const { id } = req.params;
        const todo = yield todoModel_1.default.findByIdAndUpdate(id, { title }, { new: true });
        res.status(200).json({ todo });
    }
    catch (error) {
        next(error);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todoModel_1.default.findByIdAndDelete(id);
        res.status(200).json({ todo });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTodo = deleteTodo;
