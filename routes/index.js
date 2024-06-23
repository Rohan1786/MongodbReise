var express = require('express');
var router = express.Router();
var mongo=require('./users');
const session = require('express-session');

/* GET home page. */
router.get('/create',async function(req, res, next) {
const create=await mongo.create({
    username:"rohan",
  password:"123Rohan"
})


 res.send(create)
});
router.get('/delete',async function(req,res){
const destro=await mongo.deleteMany({});
res.send(destro);
})
router.get('/find',async function(req,res){
  const findo=await mongo.find();
  res.send(findo);
  })
  
  router.get('/session',(req,res)=>{
    const sess=req.session.ban=true;
    console.log(sess)
    res.send("hello hayhay")

  })
  router.get('/ban',(req,res)=>{
  
    console.log("hei")
    if(req.session.ban==true){
      res.send("your banned")
    }
    else{
      
    }
   

  })
  

module.exports = router;
