const express=require('express');
const app=express();
const path=require("path");
const port=80;
//express configuration
app.use('/static',express.static('static'));
app.use(express.urlencoded());
// pug configuration 
app.set('view engine','pug');// set the template engine for pug
app.set('views',path.join(__dirname ,'views'));//set the view directory
app.get('/',(req,res)=>{
    const obj={'title':'Dance webapp'};
    res.render('index.pug',obj)
});
app.post('/',(req,res)=>{
    res.render('index.pug')
});
app.get('/contact',(req,res)=>{
    const obj={'title':'Dance webapp'};
    res.render('contact.pug',obj)
});
app.post('/contact',(req,res)=>{
    res.render('contact.pug')
});
app.get('/about',(req,res)=>{
    const obj={'title':'Dance webapp'};
    res.render('about.pug',obj)
});
app.post('/about',(req,res)=>{
    res.render('about.pug')
});
app.get('/services',(req,res)=>{
    const obj={'title':'Dance webapp'};
    res.render('services.pug',obj)
});
app.post('/services',(req,res)=>{
    res.render('services.pug')
});
app.get('/classinfo',(req,res)=>{
    const obj={'title':'Dance webapp'};
    res.render('class_info.pug',obj)
});
app.post('/classinfo',(req,res)=>{
    res.render('class_info.pug')
});


app.listen(8000,'localhost',()=>{
    console.log("This app is started successfully");
});