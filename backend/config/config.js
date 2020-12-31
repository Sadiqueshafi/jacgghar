const env = process.env.NODE_ENV||'development';

var config =require('./config.json');

var envConfg = config[env];

Object.keys(envConfg).forEach(key =>{
  process.env[key]=envConfg[key]
})
