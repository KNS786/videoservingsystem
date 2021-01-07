const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');

const user=require('../model/auth');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config');

const usercheck=require('../middleware/user.check');
const Usermodel=require('../model/signin-signup');

router.post('/signup',function(req,res){
  const {name,email,password}=req.body;
    console.log(req.body);
   if(!name || !email || !password)
       return res.status(400).json({auterr:'please fill all the fields '});
   
     Usermodel.findOne({email:email}).then((useremail)=>{
         if(useremail)
           return res.status(400).json({Autherr:'already exists please login'});

        bcrypt.hash(password,14).then(hashPassword=>{

             const newUser=new Usermodel({
                 name,
                 email,
                 password:hashPassword
             })        
           
           newUser.save()
           .then(()=>res.status(200).json({adduser:'successfully added db'}))
           .catch(err=>res.status(400).json({autherr:'something went wrong '}))
    
        })  


     }).catch(err=>console.error(err));

})

//signin
router.post("/signin",function(req,res){
      const {email,password}=req.body;
      if(!email || !password)
        return res.status(400).json({Autherr:'plase fill all the field correctly'})

     Usermodel.findOne({email:email}).then(savedUser=>{
         if(!savedUser)
           return res.status(400).json({autherr:'email not found'});


        bcrypt.compare(password,savedUser.password)
        .then(ifMatch=>{
             if(!ifMatch)
               return res.status(400).json({Autherr:'Incorrect Password'});
            
            //if true to retuen username,email,id
             const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
             res.json({token,user:{__id:savedUser._id,email:savedUser.email,name:savedUser.name}});
             
        }).catch(err=>console.error(err));
     }).catch(err=>console.log(err));


});

module.exports=router;
