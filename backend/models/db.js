const mongoose =require('mongoose');
const { json } = require('body-parser');

mongoose.connect(process.env.MONGOODB_URL,{ useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('Mongdb connect successfully');
    }
    else{
        console.log('error in database collections'+JSON.stringify(err,undefined,2))
    }
})
module.exports = mongoose;
require('./user.model')

