var expres=require('express')

var sample=expres()
sample.get('/',(req,res)=>{
    res.send("Hello")
})
sample.get('/contact',(req,res)=>{
    res.send("Welcome to contact page")
})
sample.get('/profile',(req,res)=>{
    res.send("Welcome to profile page")
})
sample.listen(3000,()=>{
    console.log("Server Started at http://localhost:3000/")
})