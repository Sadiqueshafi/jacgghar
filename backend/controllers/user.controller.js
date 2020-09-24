const mongoose =require('mongoose');
const User = mongoose.model('User');
const bcrypt  = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register=(req,res,next)=>{
var user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.password =req.body.password;
  user.save((err,doc)=>{
    if(!err) {res.send(doc)}
    else{
      if(err.code ==11000){
        res.status(422).send(['Dublecate email address found'])
      }else{
        return next(err)
      }
     }
  })
}

exports.userLogin =(req,res,next)=>{
  let fetchuser;
  User.findOne({
      email:req.body.email
      // password:req.body.password
  }).then(user =>{
      if(!user){
          return res.status(401).json({
              message:"Auth failed "
          })
      }
      fetchuser = user
      console.log(user)

      return bcrypt.compare(req.body.password,user.password)
  })
  .then(result=>{
      if(!result){
          return res.status(401).json({
              message:"auth failed"
          })
      }
      console.log(result)

      const token = jwt.sign({email:fetchuser.email,userId:fetchuser._id},
          'secrete_this_should_be_longer',{expiresIn:"1h"});
      res.status(200).json({
          token:token,
          expiresIn:3600,
          userId:fetchuser._id
      })
  })
  .catch(err =>{
      return res.status(401).json({
          message:"You  Are not Authenticateds"
      });
  });
}
