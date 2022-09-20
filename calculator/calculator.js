const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:ture}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var c = a+b;
  res.send("the result:"+c);
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
   var w = parseFloat(req.body.weight);
   var h = parseFloat(req.body.height);
   var b = w/(h^2);
  res.send("the bmi:"+b);
});

app.listen(3000,function(){
  console.log("Server started by nodemon");
});
