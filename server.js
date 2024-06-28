const express=require("express");
const authRoutes=require('./routes/authRoutes');

app.use(express.json());
app.use("/api",authRoutes);


app.listen(3000,()=>{
    console.log("server is running on port 3000")
});
