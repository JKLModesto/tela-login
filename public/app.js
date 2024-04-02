const express = require('express')
const app = express();
const PORT = 3000

app.get('/login', (req, res, next)=>{
    res.sendFile(__dirname+"/login.html")
})  

app.get('/cadastro', (req,res,next)=>{
    res.sendFile(__dirname+"/cadastro.html")
})





app.listen(PORT)