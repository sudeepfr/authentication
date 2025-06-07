const {User} = require("../model/user.model.js");

const signUp = async (req, res,next ) => {
    try{

        console.log(req.body);
        const { username, email, password } = req.body;
    
        const newUser = new User({ 
            username:username, 
            email:email , 
            password:password,
        });
    
        await newUser.save();
        res.status(201).json({ message: "user successfully created" });
    }catch(err){
        // res.status(500).json({messsage:"user not created"});
       next(err);
    }

};
module.exports = { signUp }