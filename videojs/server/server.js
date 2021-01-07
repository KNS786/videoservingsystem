const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors');

const port=process.env.PORT || 5000;

const {MONGOURI}=require('./config');

app.use(cors());

app.use(express.json());


//user authetication
const user=require('./routes/login');
app.use(user);









mongoose.connect(MONGOURI,{
     useUnifiedTopology:true,
      useNewUrlParser:true,
      useCreateIndex:true
});

mongoose.connection.on('connected',function(){
  console.log("mongo db connected ");
})

mongoose.connection.on('error',function(){
  console.log("mongo db not connected");

})


app.listen(port,function(){
   console.log("app Running ");

});
