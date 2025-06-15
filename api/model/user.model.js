const mongoose =require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
   username:{
      type:String,
      required:true,
      unique:true,
   },
   email:{
      type:String,
      required:true,
      unique:true,
   },
   password:{
      type:String ,
      required:true,
      
   },
   profilePicture:{
       type:String,
       default:"https://th.bing.com/th/id/OIP.EcxH_rWLpGqeR5FzJJYnLQHaHa?r=0&rs=1&pid=ImgDetMain",
   },
});

console.log(userSchema);
const User=mongoose.model('User',userSchema);
module.exports ={User};


