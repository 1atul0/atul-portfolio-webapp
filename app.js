const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
const nodemailer=require('nodemailer');

let result=false;
let checkError=false;


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
  if (result===true)
  {
    result=false;
    res.render('contact',{message:"Thanks for contacting me!"} );
  }
  else if(checkError===true)
  {
    checkError=false;
    res.render('contact',{message:"Something went wrong! Please Try again."})
  }
  else
 res.render('contact',{message:null});
})


app.post('/contact',function(req,res){
  const {name,surname,email,subject,message}=req.body;
  const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'919atul@gmail.com',
      pass:'qfpqeqikkcsxzhpk'
    }
  });
  const mailOptions={
    from:email,
    to:'919atul@gmail.com',
    subject:subject,
    text:'Name: '+name+' '+surname+'\nEmail: '+email+'\nMessage: '+message,
  };

  transporter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error);
      result=false;
      checkError=true;
      res.redirect("/contact");
      
      
    }else{
      console.log('Email sent: '+info.response);
      result=true;

      res.redirect('/contact');
      // res.write('<script>alert("Thank You for Contacting me!");</script>');
      // setTimeout(() => { res.redirect("/"); }, 5000); 
      

    }
  });



});






app.listen(3000,function(){
  console.log("server is running on port 3000");
})