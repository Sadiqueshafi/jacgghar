 var express=require('express');
 var router = express.Router();

 const curlUser = require('../controllers/user.controller');
 router.post('/register',curlUser.register)

 module.exports =router
