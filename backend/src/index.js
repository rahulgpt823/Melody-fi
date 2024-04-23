
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import platformRouter from './route/user_route.js';
dotenv.config();

const app= express();

//app.use();
/**
 * app.use(express.json())
 * Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
 */
 app.use(express.json());

const dbUri =`mongodb+srv://Personal_Blog:123123123@dhanrev.fisvv8d.mongodb.net/spotify?retryWrites=true&w=majority`;
mongoose.connect(dbUri).then(()=>{console.log("connected to DB")}).catch((err)=>{console.log("mongoDB failed to connect : ",err)})

app.get('/health',(req,res,next)=>{
    console.log("health check done");
    res.send("API is working fine")
});

app.get('/',(req,res,next)=>{
    // req - contain all the data for the request
    // res -all data for the response
    console.log("");
    res.send("Hello World!!.")
});

app.use('/platform', platformRouter)
app.use('/song', songRouter)


app.listen(8080,()=>{
    console.log("listen on port 8080");
});

