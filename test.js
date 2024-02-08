const { configDotenv } = require('dotenv')
const express=require('express')
const app=express()
require('dotenv').config();

app.get("/hello",(req,res)=>{
    console.log("hello")
    return res.send("hello")
})
const port = process.env.PORT || 3000
app.listen(port,(err,res)=>{
    if(err){
        console.log(err)
        
    }
    console.log("server 3000")
})