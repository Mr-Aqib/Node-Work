// Require express for server
const express = require('express');
const app = express();
// Require env for use
require('dotenv').config()
//Making get Api
app.get('/get-data', (req, res) =>
{
    res.send("Ye get Data ki Get Api hai")
})
// Post Api
app.post('/post-data', (req, res) =>
{

    res.send("Ya post Data ki Post Api hai")
})
// Put Api on Id base
app.put('/put-data/:user_id', (req, res) =>
{
    const id = req.params.user_id
    res.send(`Data ki user id ${id} ki Put Api hai`)
})
// Delete api on Id base
app.delete('/delete-data/:user_id', (req, res) =>
{
    const delid = req.params.user_id
    res.send(`Data ki user id ${delid} ki Delete Api hai`)
})
app.listen(process.env.PORT,()=>console.log(`Port Running on  ${process.env.PORT}`))