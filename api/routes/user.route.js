const express = require('express');
const { test } = require('../controllers/user.controller');
const router = express.Router();
router.get('/api',test); 
module.exports = router;
