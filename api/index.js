const express = require('express');
const app=express();
app.use(express.json());
const mongoose =require('mongoose');
const userRouter= require('./routes/user.route.js');
const authRouter=require('./routes/auth.route.js');

const dotenv=require('dotenv');
// express.use()
dotenv.config();   

console.log(process.env.MONGO);
mongoose.connect(process.env.MONGO).then(()=>{
     console.log("connected successfully ")
}).catch((err)=>{
    console.log(err); 
}); 

app.use('/user',userRouter);
app.use('/signUp',authRouter);


app.listen(3000,()=>{
     console.log("server started at port 3000!");
})
     