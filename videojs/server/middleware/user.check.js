const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config');


const users=require('../model/signin-signup');

module.exports=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
       return res.status(401).json({error:'you re logged in first'});
    }
   
   const token=authorization.replace('Bearer ',"");

  jwt.verify(token,JWT_SECRET,(err,payload)=>{
     if(err) res.status(401).json({error:'you must logged in'});

    const {_id}=payload;

    users.findById(_id).then(userdata=>{
          req.user=userdata;
          next();
     })
  })


}