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
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
let DB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield mongoose_1.default.connect("mongodb://localhost:27017/CRUD_operation");
});
if (!DB) {
    console.log("Database connection failed");
}
else {
    console.log("Database connected successfully");
}
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
const port = process.env.PORT || 4050;
app.get('/todos', index_1.default);
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
