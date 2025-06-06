const userRouter= require('./routes/user.route.js');
const express = require('express');
const mongoose =require('mongoose');
const dotenv=require('dotenv');
const app=express();

dotenv.config();

console.log(process.env.MONGO);
mongoose.connect(process.env.MONGO).then(()=>{
     console.log("connected successfully ")
}).catch((err)=>{
    console.log(err); 
}); 

app.use('/',userRouter);


app.listen(3000,()=>{
     console.log("server started at port 3000!");
})
     