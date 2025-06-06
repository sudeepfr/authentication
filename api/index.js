const express = require('express');
const mongoose =require('mongoose');
const dotenv=require('dotenv');
const app=express();
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
     console.log("connected successfully ")
}).catch((err)=>{
    console.log(err); 
}); 



app.get('/',(req,res)=>{
     console.log("inside the get");
})

app.listen(3000,()=>{
     console.log("server started at port 3000!");
})