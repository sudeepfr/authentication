const { User } = require("../model/user.model.js");
const { errorHandler } = require("../utils/error.js");
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();  

const signUp = async (req, res, next) => {
    try {

        console.log(req.body);
        const { username, email, password } = req.body;

        const newUser = new User({
            username: username,
            email: email,
            password: password,
        });

        await newUser.save();
        res.status(201).json({ message: "user successfully created" });
    } catch (err) {
        // res.status(500).json({messsage:"user not created"});
        next(err);
    }

};

const signIn = async (req, res, next) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;

        const validUser = await User.findOne({ email: email });// will get the user with valid email 
        if (!validUser) return next(errorHandler(404, "invalid user"));
        if (validUser.password!==password) return next(errorHandler(401, "Invalid password"));
        // after successsfull login .issue the Jwt token =
        //Jwt authentication 
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        const { password:hashedpassword , ...userWithoutPassword } = validUser._doc;
        
        res.cookie('access_token',token,{httpOnly:true,maxAge: 360000}).status(200).json(userWithoutPassword);

        // httpOnly -->no third party site can access these cookies
        // validUser --> will use to varify the user and redirect to the user workspsace
    } catch (err) {
        next(err)
    }
}

module.exports = { signUp, signIn }