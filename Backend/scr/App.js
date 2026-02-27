import dotenv from "dotenv";
dotenv.config();

import express from "express";
import {createServer} from "node:http";
import status from "http-status";
import cros from "cors";
import mongoose, { mongo } from "mongoose";
import connectTosocket from "./controllers/socketmanager.js";
import userRoutes from "../scr/routes/user_route.js"


const app = express();
const server = createServer(app);
const io =  connectTosocket(server);
app.set("port" , (process.env.PORT || 5000))
const Mongo_url =process.env.MONGO_URL
app.use(cros());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit :  "40kb" , extended:true } ))


app.use("/api/v1/user" , userRoutes)

app.get( '/home' , (req,res)=>{
    res.json({"hello": "Aman "})
} )

const start = async()=>{
    const Momgoconnection = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MONGO CONNECTION DB HOST : ${Momgoconnection.connection.host}`);
    
    app.listen(app.set('port') , ()=>{
        console.log("LISTENING ON PORT 5000"); 
    })
};
 

start();
