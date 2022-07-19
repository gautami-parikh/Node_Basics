const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
const { result } = require('lodash');
const Joi = require('joi');
const { response } = require('express');

// app.use('/public',express.static(path.join(__dirname,'public')));//using alias
app.use(express.static(path.join(__dirname,'static2')));
app.use(bodyParser.urlencoded({extended: false}));//parses data for us
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    // res.send('hello world');
    //using express for static files
    res.sendFile(path.join(__dirname,'static2','in.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required() ,
        password : Joi.string().min(5).max(10).required() 
    });


const response = schema.validate(req.body);

if(response.err){
    console.log(response.err);
}
else
{
    console.log(response);
    res.send("success");
}

    //database work here
    // res.send('successfully posted data');
    res.json({success : true});
});

app.get('/example',(req,res)=>{
    res.send('hitting example route')
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    /*
    input:http://localhost:3000/example/gautami/19?tutorial=parameter_tutorial
     output:{ name: 'gautami', age: '19' }
            { tutorial: 'parameter_tutorial' }
    input:http://localhost:3000/example/gautami/19?tutorial=parameter_tutorial&sort=bypage
    output:{ name: 'gautami', age: '19' }
           { tutorial: 'parameter_tutorial', sort: 'bypage' }        */
    // res.send('example with route params');
    res.send(req.params.name + " : " + req.params.age);
});


app.listen('3000');