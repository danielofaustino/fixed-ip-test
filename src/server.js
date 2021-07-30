const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan(':remote-addr'))
app.use(express.json())

app.get('/test',(req,res)=>{
  return res.json({msg:'ok'})
})


module.exports = app