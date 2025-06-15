const express=require('express');
const { signUp, signIn ,google} = require('../controllers/auth.controller');

const router=express.Router();

router.post('/signUp',signUp); 
router.post('/signIn',signIn);  
router.post('/googleLogin',google);  
module.exports = router;