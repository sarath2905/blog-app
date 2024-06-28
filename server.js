const express=require("express");
const app = express();

app.get('/',(req,res)=>{
    res.json({
        message:"HELLO WORLD"
    })
});

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});
