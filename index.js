// Require express for server
const express = require('express');
const app = express();
// Require env for use
require('dotenv').config()
// Calling Apis from data routes
app.use('/',require('./routes/data_routes'))
app.listen(process.env.PORT,()=>console.log(`Port Running on  ${process.env.PORT}`))