import express from "express";
import {getAll,addNew,editTodo,deleteTodo} from "../controllers/todoController.js"

const router=express.Router()

router.route("/").get(getAll).post(addNew)

router.route("/:todoId").put(editTodo).delete(deleteTodo)


export default router;