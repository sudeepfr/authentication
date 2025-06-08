const express = require('express');
const mongoose =require('mongoose');
const userRouter= require('./routes/user.route.js');
const authRouter=require('./routes/auth.route.js');
const cors = require('cors'); 
const dotenv=require('dotenv');
dotenv.config();   
const app=express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));  



// express.use()

console.log(process.env.MONGO);

mongoose.connect(process.env.MONGO).then(()=>{
     console.log("connected successfully ")
}).catch((err)=>{
    console.log(err); 
}); 

app.use('/user',userRouter);
app.use('/signUp',authRouter);

app.use((err,req,res,next)=>{
     const statusCode=err.statusCode || 500;
     const message =err.message || 'internal server Error';

     return res.status(statusCode).json({
         success:false,
         error:message,
         statusCode:statusCode,
     })
})

app.listen(3000,()=>{
     console.log("server started at port 3000!");
})
     