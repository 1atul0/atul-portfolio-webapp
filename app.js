const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();

app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.render('home');
})

app.get("/about",function(req,res){
  res.render('about');
})
app.get("/education",function(req,res){
  res.render('education');
})
app.get("/skill",function(req,res){
  res.render('skill');
})
app.get("/project",function(req,res){
  res.render('project');
})
app.get("/achievement",function(req,res){
  res.render('achievement');
})
app.get("/contact",function(req,res){
  res.render('contact');
})









app.listen(3000,function(){
  console.log("server is running on port 3000");
})