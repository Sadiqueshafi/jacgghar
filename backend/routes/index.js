 var express=require('express');
 var router = express.Router();

 const curlUser = require('../controllers/user.controller');
 router.post('/register',curlUser.register)
 router.post("/login",curlUser.userLogin);

 module.exports =router
