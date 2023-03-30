const express = require('express');
const app = express();
const port = 4444;
require("./config/db.config")
const router = require("./router/userRoute")

//middleware
app.use(express.json())
app.use(router)


//homepagerouting
app.get("/",(req,res)=>{
    res.send("its homepage")
})



//server

app.listen(port,()=>{
    console.log(`server is runing on port:${port}`)
    
})