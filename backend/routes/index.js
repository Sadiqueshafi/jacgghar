 var express=require('express');
 var router = express.Router();

 const curlUser = require('../controllers/user.controller');
 router.post('/register',curlUser.register)
 router.post("/login",curlUser.userLogin);
 router.get("/register",curlUser.getDetails)

 module.exports =router
