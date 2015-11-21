/**
 * Created by wq on 15-11-21.
 */
var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();
var auth = basicAuth(function(name,password){
    return (name === "wangqi" && password === "12345");
});
app.get('/',auth,function(req,res){

    res.send("hello world!");
});
app.get('/login',auth,function(req,res){

    res.send("login");
});
app.listen(3000);
console.log("listen on the port 3000");