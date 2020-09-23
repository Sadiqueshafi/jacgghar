require('./config/config')
require('./models/db')
const express = require('express');
const path = require('path');
const app = express();
const bodyParser =require('body-parser');
const rtsIndex = require('./routes/index');
app.use(bodyParser.json());
const cors =require('cors');
app.use(cors())
app.use('/api',rtsIndex )
app.use((err,req,res,next)=>{
  if (err.name === 'ValidationError'){
    var valErrors =[];
    Object.keys(err.errors).forEach(key=>{
      valErrors.push(err.errors[key].message)
    });res.status(422).send(valErrors)
  }
})
app.listen(process.env.PORT,()=>{
    console.log("server is running on port :"+process.env.PORT);})
