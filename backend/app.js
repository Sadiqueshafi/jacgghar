require('./config/config')
require('./models/db')
const express = require('express');
const path = require('path');
const app = express();
const bodyParser =require('body-parser');
const rtsIndex = require('./routes/index');
const patientdetail = require('./routes/patientdetail');
const blooddetail =require('./routes/blooddetail');
const alldata = require("./routes/jachghardetail");
const urinedetail =require('./routes/urinedetails');
const restpassword =require("./routes/restpassword");

app.use(bodyParser.json());
const cors =require('cors');
app.use(cors());
app.use('/api',rtsIndex );
app.use('/api',patientdetail);
app.use('/api',blooddetail);
app.use('/api',urinedetail);
app.use('/api',restpassword)
// app.use('/api',jachghardetail)
app.use('/api',alldata)
// app.use(app.router);
// routes.initialize(app);
// app.use('/api',jachgharalldetail);
app.use((err,req,res,next)=>{
  if (err.name === 'ValidationError'){
    var valErrors =[];
    Object.keys(err.errors).forEach(key=>{
      valErrors.push(err.errors[key].message)
    });res.status(422).send(valErrors)
  }
})

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin','X-Requested-With','Content-Type','Accept','Authorization');
  res.setHeader('Access-Control-Allow-Methods',"GET","POST","PUT","PATCH","DELETE","OPTIONS");
  next();
})
app.listen(process.env.PORT|| 8080,()=>{
    console.log("server is running on port :"+process.env.PORT|| 8080);})
