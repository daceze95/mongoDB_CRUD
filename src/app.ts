import express,{Request, Response, NextFunction} from 'express';
import CRUD_Routes from './routes/index';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

let DB = async () =>{
    return await mongoose.connect("mongodb://localhost:27017/CRUD_operation");
}

if(!DB){
    console.log("Database connection failed");
}else{
    console.log("Database connected successfully");
}

app.use(morgan('dev')); 
app.use(express.json());

const port = process.env.PORT || 4050;


app.get('/todos', CRUD_Routes)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});