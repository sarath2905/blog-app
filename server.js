const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan")
const cors=require("cors");
const mongoose=require("mongoose")

//routes
const authRoutes=require("./routes/authRoutes")

dotenv.config();
const app=express();

//databse connection
mongoose.connect(process.env.MONGO_URI,{
    dbName:process.env.DB_NAME,
}).then(()=>console.log("database connected"))
.catch((err)=>console.log("db connection failed",err));




//Middleware
app.use(express.json());
app.use("/api",authRoutes);
app.use(cors());

app.use("/api",authRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});
