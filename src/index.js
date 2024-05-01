// require('dotenv').config({path:'./env'});//this line will also work fine but it will hamper the conssistency of the code
// as we are using import syntax everywhere but here we are using require.
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo Db connection failed !!", err);
  });

/*
import express from "express";
const app=express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
    app.on("error",(error)=>{
        console.log('Error while connecting to the database')
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("ERROR: ", error);
    throw err;
  }
})();
*/
