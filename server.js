// Install express server
// const express = require('express');
// const path = require('path');
// const {mongoose }=require('./backend/backend/db')
// const app = express();
// const bodyParser =require('body-parser')
// const cors =require('cors');
// const jachgharRoughterform = require('./backend/backend/controllers/jachgharformcontrolers');
// // Serve only the static files form the angularapp directory
// app.use(cors({origin:'http://localhost:4200'}))
// app.use(express.static(__dirname + '/src'));
// app.use(bodyParser.json())
// app.use('/gachgharform',jachgharRoughterform)
// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/src/index.html'));
// });

// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Headers','Origin','X-Requested-With','Content-Type','Accept','Authorization');
//   res.setHeader('Access-Control-Allow-Methods',"GET","POST","PUT","PATCH","DELETE","OPTIONS");
//   next();
// })

// var app= express()

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080,()=>{
//   console.log("server is running on port 8080")
// });

// require('./backend/config/config')
// require('./backend/models/db')
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const mongoose =require('mongoose');

const bodyParser =require('body-parser');
const rtsIndex = require('./backend/routes/index');
const patientdetail = require('./backend/routes/patientdetail');
const blooddetail =require('./backend/routes/blooddetail');
const alldata = require("./backend/routes/jachghardetail");
const urinedetail =require('./backend/routes/urinedetails');
const restpassword =require("./backend/routes/restpassword");
const corse =require('cors');
const PORT = process.env.PORT || 8080;

const url = '/api';

// var a = fetch(proxyurl+url)
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// console.log(a)

app.use(rtsIndex );
app.use(url,patientdetail);
app.use(url,blooddetail);
app.use(url,urinedetail);
app.use(url,restpassword);
// app.use('/api',jachghardetail)
app.use(url,alldata);
// app.use(app.router);
// routes.initialize(app);
// app.use('/api',jachgharalldetail);
app.use(corse());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((err,req,res,next)=>{
  if (err.name === 'ValidationError'){
    var valErrors =[];
    Object.keys(err.errors).forEach(key=>{
      valErrors.push(err.errors[key].message)
    });res.status(422).send(valErrors)
  }
})

app.use((req,res,next)=>{
  // res.setHeader('Access-Control-Allow-Origin','*');
  // headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers','Origin','X-Requested-With','Content-Type','Accept','Authorization');
  res.setHeader('Access-Control-Allow-Methods',"GET","POST","PUT","PATCH","DELETE","OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
  next();
})

mongoose.connect('mongodb://jachghar:jachghar@cluster0-shard-00-00.l08tx.mongodb.net:27017,cluster0-shard-00-01.l08tx.mongodb.net:27017,cluster0-shard-00-02.l08tx.mongodb.net:27017/sadique?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{ useUnifiedTopology: true })
  .then(()=> console.log("connect to mongoose"))
  .catch(err =>console.log("can not connect to mongoose",err));

mongoose.connection.on('connected',(err)=>{
  if(!err){
    console.log("mongoose is connected !!!");
}
else{
    console.log('error in database collections'+JSON.stringify(err,undefined,2))
}
})

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/herohu/index.html'));
});

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('dist/herohu'));
// app.use(express.static('./dist/herohu'))
}
// Start the app by listening on the default Heroku port
app.listen(PORT,console.log(`server is starting at ${PORT}`));
