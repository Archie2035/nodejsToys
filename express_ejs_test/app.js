var express = require('express');
var ejs = require('ejs');

var app = express();
app.set('views','./views');
app.engine('html',ejs.renderFile);
app.listen(3000);
app.locals = ({
    myName: 'wangqi',
    age: '23',
    qq: '912293097'
});
//http://localhost:3000/ejs
app.get('/ejs',function(req,res){
    app.render('user_ejs.html',function(err,renderData){
        res.send(renderData);
    });
});