const express = require("express")
app = express()
app.get('/',(req,res)=>{
res.send("Hello From Docker + Jenkins + k8s ")
})
app.listen(4000,()=>{
    console.log("Server Started")
})