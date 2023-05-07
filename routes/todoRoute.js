import express from "express";
import {getAll,getTodoById,addNew,editTodo,deleteTodo} from "../controllers/todoController.js"

const router=express.Router()

router.route("/").get(getAll).post(addNew)

router.route("/:todoId").put(editTodo).get(getTodoById).delete(deleteTodo)


export default router;