const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const videos=new Schema({
    title:{
       type:String,
       required:true
     },
     description:{
       type:String,
       min:2,
        max:20,
        required:true
       },
     url:{
        type:String,
        required:true
     }
});

module.exports=mongoose.model("videos",videos);
