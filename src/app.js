import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public"))//it is used to serve static files such as 
//html,css,js from a specified directory.

app.use(cookieParser()); //It is middleware that parses HTTP request cookies.
//we can access and keep the cookies on the browser of the user.

//routes import 
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)

//when we want to declare any route then we will use a middleware
// i.e app.use() instead of app.get or any other because here the method is defined on some other file 
//therefore we will import it and then define it.

export  { app } 