/**
 * Created by wq on 15-11-21.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser());
app.get('/',function(req,res){
    var resHtml = "<form method='post'>" +
        "name:<input type='text' name='name'> <br>" +
        "age:<input type='text' name='age'> <br>" +
        "<input type='submit' value='Submit'>";
    res.send(resHtml);
});
app.post('/',function(req,res){
    var resHtml = "<h1>Hello "+req.body.name
    +"</h1> you are: "+req.body.age;
    res.type('html');
    res.end(resHtml);
});

app.listen(3000);
console.log("listen on the port 3000");