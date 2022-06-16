const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")

const mid = async function( req,res,next) {
    let token = req.header["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({status:false,msg: "token is invalid"});
     console.log(token);
    
     let userId = req.params.usedId;
     let user = await userModel.findById(userId);
     if(!user){
        return res.send("no such user exist")
     }
     let decodedToken = jwt.verify(token, "functionup-thorium");
     if(!decodedToken)
     return res.send({status: false, msg: "token is invalid"})
     let userLoggedIn= decodedToken.userId;
     let userToBeModified = req.params.userId;
     if(userLoggedIn==userToBeModified){
        next()
     }
     else{
        res.send("action not accepted")
     }
    }
       module.exports.mid = mid
