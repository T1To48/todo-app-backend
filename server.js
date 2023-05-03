import express from "express";
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import errorHandler from "./middlewares/errorHandler.js"

import todoRoute from "./routes/todoRoute.js"

dotenv.config({ path: "./config/config.env" });
connectDB();

const app=express();
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"))
}

app.get("/",(req,res)=>{
    res.send("PICKLE RICK")
})

app.use("/todo-storage/v1",todoRoute);

app.use(errorHandler)

const PORT=process.env.PORT || 8080

const server=app.listen(PORT,console.log(` ⭐⭐server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} ⭐⭐`))


process.on("unhandledRejection",(err,promise)=>{
    console.log(`😡😡 Error: ${err.message} 😡😡`)
    server.close(()=>process.exit(1));
})