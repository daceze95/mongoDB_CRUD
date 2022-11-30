import mongoose from "mongoose";



const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", todoSchema);

export default Todo;

// interface TodoInstance{
//     "_id": string;
//     "title": string;
//     "description": string;
//     "createdAt": string;
//     "updatedAt": string;
// }

// interface TodoDocument extends mongoose.Document{
//     title: string;
//     description: string;
// }

// interface TodoModel extends mongoose.Model<TodoDocument>{
//     build(attr: TodoInstance): TodoDocument;
// }

// const todoSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// });

// todoSchema.statics.build = (attr: TodoInstance) => {
//     return new Todo(attr);
// }

// const Todo = mongoose.model<TodoDocument, TodoModel>('Todo', todoSchema);

// export { Todo };