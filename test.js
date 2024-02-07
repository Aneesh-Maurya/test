const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.send("hello")
    console.log("hello")
})
app.listen(3000,(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log("server 3000")
})