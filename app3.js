const express = require('express');
const app = express();
const path = require('path');

// app.use('/public',express.static(path.join(__dirname,'public')));//using alias
app.use(express.static(path.join(__dirname,'static2')));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index1');
});
 app.listen(3000);

