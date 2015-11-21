/**
 * Created by wq on 15-11-21.
 */
var express = require('express');
var cookieparser = require('cookie-parser');
var app = express();
app.use(cookieparser());

app.get('/',function(req,res){
    var lastvisittime;
    console.log(req.cookies);
    if(req.cookies.lastVistTime){
        lastvisittime = req.cookies.lastVistTime;
    }else{
        lastvisittime = 0;
    }

    var date=new Date();
    var time = date.getTime()/1000;
    console.log(time);
    res.cookie("lastVistTime",time,{
        maxAge:60*60*365,//cookie生存时间
        httpOnly:true//只能由服务器访问
    });
    if(lastvisittime){
        res.send("你上一次访问的时间是"+lastvisittime);
    }else{
        res.send("你还没有访问过该网站");
    }
});

app.listen(3000);

console.log("listen on the port 3000");