const { User } = require("../model/user.model.js");
const { errorHandler } = require("../utils/error.js");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");
dotenv.config();

const signUp = async (req, res, next) => {
    try {

        console.log(req.body);
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
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

        const isPasswordCorrect = await bcrypt.compare(password, validUser.password);
        if (!isPasswordCorrect) return next(errorHandler(401, "Invalid password"));

        // after successsfull login .issue the Jwt token =
        //Jwt authentication 
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        const { password: hashedpassword, ...userWithoutPassword } = validUser._doc;
        const expiryDate = new Date(Date.now() + 360000);
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(userWithoutPassword);

        // httpOnly -->no third party site can access these cookies
        // validUser --> will use to varify the user and redirect to the user workspsace
    } catch (err) {
        next(err)
    }
}

const google = async (req, res, next) => {
    try {

        // Check if user already exists
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const expiryDate = new Date(Date.now() + 360000);
            const { password: hashedpassword, ...userWithoutPassword } = user._doc;
           return  res
           .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
           .status(200)
           .json(userWithoutPassword);
        } else {

            //if user don't exits 
            const password = Math.random().toString(36).slice(-8); // generate a random password
            const hashesPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                username: req.body.name.split(" ").join("").toLowerCase() + (Math.floor(Math.random() * 10000)).toString(), // generate a random username
                // username: req.body.name,
                email: req.body.email,
                password: hashesPassword,
                profilePicture: req.body.photo,
            })

            await newUser.save();

            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const expiryDate = new Date(Date.now() + 360000);
            const { password: hashedPassword2, ...userWithoutPassword } = newUser._doc;

           res
          .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
          .status(200)
          .json(userWithoutPassword);

        }
    } catch (error) {
        next(error);
    }
}
module.exports = { signUp, signIn, google }