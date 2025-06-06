const express = require('express');
const app=express();

app.get('/',(req,res)=>{
     console.log("inside the get");
})

app.listen(3000,()=>{
     console.log("server started at port 3000!");
})