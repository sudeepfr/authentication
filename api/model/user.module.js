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
      type:Number ,
      required:true,
      
   }
});

const user=mongoose.model(user,userSchema);
export default user;


