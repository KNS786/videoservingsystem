const mongoose=require('mongoose');
const auth=mongoose.Schema;

const authetication=new auth({
     name:{
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

module.exports=mongoose.model("authetication",authetication);
