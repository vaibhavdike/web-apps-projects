const express=require('express');
const app=express();
const path=require("path");
const fs=require("fs");

const port=80;
//express configuration
app.use('/static',express.static('static'));
app.use(express.urlencoded());
// pug configuration 
app.set('view engine','pug');// set the template engine for pug
// app.set('views',path.join(__dirname ,'views'));//set the view directory
app.set('views','./views');
app.get('/',(req,res)=>{
    const obj={'title':'this is pug engine tutorial'};
    res.render('index.pug',obj)
});
app.post('/',(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    let gender=req.body.gender;
    let address=req.body.address;
    let outputSTR=`Name:${name},age:${age},gender:${gender},address:${address}`;
    let obj={"message": "your form submitted successfully"};
    res.render('index.pug',obj)
    fs.writeFileSync('output.txt',outputSTR);
});

app.listen(8000,'localhost',()=>{
    console.log("This app is started successfully");
});
























//our pug endpoint
// app.get('/demo',(req,res)=>{
//     res.render('demo', { title: 'Hey vaibhav', message: 'Hello there!welcome to pug engine' })
// });
// app.get('/',(req,res)=>{
// res.send("This is my home page of my first express app ");
// });
// app.get('/about',(req,res)=>{
//     res.send("This is my about page of my first express app ");
// });
// app.get('/contact',(req,res)=>{
//     res.send("This is my contact page of my first express app ");
// });
