const mongoose = require('mongoose')

const jachjharForm = mongoose.model('jachgharform',{
  id:String,
  date:{type:String},
  patientName:{type:String},
  age:{type:Number},
  sex:{type:String},
  dr:{type:String},
  grouping:{type:String},
  rhtype:{type:String},
  vdrl:{type:String},
  urine:{type:String},
  remark:{type:String},
  serum:{type:String},
  DateofReport:{type:String},
})

module.exports = {jachjharForm};
