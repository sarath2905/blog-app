const { response } = require("express");
const user=require("../model/authModel");

//Register user

exports.registerUser =async(req,res)=>{
    try{
        //req.body
        const{email,password,name,gender,profilepicture}=req.body;

        // check if user already exists
        const existingUser=await user.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message:"server error",
                success:false,
                statusCode:0,
            });
        }
        
        

    }catch(err){
        res.status(500).json({
            message:"server error",
            success:false,
            statusCode:0,
        });

    };

}


//Login User

exports.loginUser =async(req,res)=>{};