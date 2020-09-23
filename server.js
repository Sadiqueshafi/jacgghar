// Install express server
// const express = require('express');
// const path = require('path');
// const {mongoose }=require('./backend/db')
// const app = express();
// const bodyParser =require('body-parser')
// const cors =require('cors');
// const jachgharRoughterform = require('./backend/controllers/jachgharformcontrolers');
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









//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
