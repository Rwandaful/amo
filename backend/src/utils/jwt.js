const jwt=require("jsonwebtoken");
const { LOGIN_SECRET } = require("../config");
const verifyToken=(token)=>{
    try{
    const payload=await jwt.verify(token, LOGIN_SECRET)
    return payload
    }catch(error){
        console.log(error)
    }
}