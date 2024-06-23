var mongoose=require('mongoose');

const m=mongoose.connect('mongodb://localhost:27017/db');

const userschema=mongoose.Schema({
  username:String,
  password:String
});

module.exports=mongoose.model("user",userschema);

