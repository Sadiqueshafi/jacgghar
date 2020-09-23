var express =require('express');
var router = express.Router();
var {jachjharForm} = require('../models/jachgharform');
const { json } = require('express');

router.get('/',(req,res)=>{
  jachjharForm.find((err,docs)=>{
    if(!err){
      res.send(docs)
    }
    else{
      console.log("Error is reteriving Employees :"+JSON.stringify(err,undefined,2))
    }
  })

})

router.post('/',(req,res)=>{
  var form = new jachjharForm({
  id:req.body.id,
  date:req.body.date,
  patientName:req.body.patientName,
  age:req.body.age,
  sex:req.body.sex,
  dr:req.body.dr,
  grouping:req.body.grouping,
  rhtype:req.body.rhtype,
  vdrl:req.body.vdrl,
  urine:req.body.urine,
  remark:req.body.remark,
  serum:req.body.serum,
  DateofReport:req.body.DateofReport
  })
  form.save((err,doc)=>{
    if(!err){
      res.send(doc);
    }
    else{
      console.log('Error in formDatasave',+JSON.stringify(err,undefined,2))
    }
  })
})
module.exports =router;
// {
//   "id":"1",
//   "date":"15/01/1998",
//   "patientName":"sadique",
//   "age":"21",
//   "sex":"male",
//   "dr":"shafi",
//   "grouping":"A+",
//   "rhtype":"positive",
//   "vdrl":"Negative",
//   "urine":"good",
//   "remark":"Negative",
//   "serum":"positive",
//   "DateofReport":"15/01/2020"
// }
