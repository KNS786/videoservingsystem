const mongoose=require('mongoose');
const NewSchema=mongoose.Schema;

const user=new NewSchema({
     username:{
       type:String,
       required:true
     },
     email:{
        type:String,
        unique:true,
        required:true
       },
      password:{
         type:String,
         required:true
       }
});

module.exports=mongoose.model("getsm",user);
