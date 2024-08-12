// Require express for server
const express = require('express');
const app = express();
// Require env for use
require('dotenv').config()
// Converting Data coming from Api into JSON format BEFORE api call is made
app.use(express.json())
app.use(express.urlencoded({express: false}))
// Calling Apis from data routes
app.use('/', require('./routes/data_routes'))
app.use('/user',require('./routes/user_register_r'))
app.listen(process.env.PORT,()=>console.log(`Port Running on  ${process.env.PORT}`))