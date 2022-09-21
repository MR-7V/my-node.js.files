const express = require("express");
const app = express();
app.get('/',function(req,res){
  res.send("<h1>hello mohith</h1>");
});
app.get('/contact',function(req,res){
  res.send("<h1>my contact page</h1>");
});
app.listen(3000,function(){
  console.log("Server started with nodemon");
});
