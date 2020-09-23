const env = process.env.NODE_ENV||'development';

const { objectify } = require('tslint/lib/utils');
var config =require('./config.json');

var envConfg = config[env];

Object.keys(envConfg).forEach(key =>{
  process.env[key]=envConfg[key]
})
