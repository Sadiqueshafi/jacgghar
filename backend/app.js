require('./config/config')
require('./models/db')
const mongoose =require('mongoose');
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
const { Mongoose } = require('mongoose');
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use('api',rtsIndex );
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

mongoose.connect('mongodb://jachghar:jachghar@cluster0-shard-00-00.l08tx.mongodb.net:27017,cluster0-shard-00-01.l08tx.mongodb.net:27017,cluster0-shard-00-02.l08tx.mongodb.net:27017/sadique?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true })
  .then(()=> console.log("connect to mongoose"))
  .catch(err =>console.log("can not connect to mongoose",err));

mongoose.connection.on('connected',(err)=>{
  if(!err){
    console.log("mongoose is connected !!!")
}
else{
    console.log('error in database collections'+JSON.stringify(err,undefined,2))
}

})
//step:3
app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/herohu/index.html'));
  });

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('./dist/herohu'))
}
app.listen(PORT,console.log(`server is starting at ${PORT}`))

