var express = require("express");
var url = require("url");

var app = express();

app.get('/',function(request,response){
    response.send("This is home page");
});
//使用url模块进行解析
//http://localhost:3000/find?book=nodejsToys&author=magicw
app.get('/find',function(request,response){
    var urlParts = url.parse(request.url,true);
    var query = urlParts.query;
    var res = "find the book is:"+query.book+" author is:"+query.author;
    console.log(res);
    response.send(res);
});
//正则表达式匹配
//http://localhost:3000/book/12:23
app.get(/^\/book\/(\w+):(\w+)?$/,function(request,response){
    var res = "book chapter :"+request.params[0]+"page:"+request.params[1];
    console.log(res);
    response.send(res);
});
//自定义的参数
//http://localhost:3000/nameMagicw
app.get('/name:yourName',function(request,response){
    res = "your name is :"+ request.param("yourName");
    response.send(res);
});
app.param('yourName',function(req,res,next,value){
    console.log("param yourName is:"+value);
    next();
});
app.get('/age:yourage',function(request,response){
    res = "your name is :"+ request.param("yourage");
    response.send(res);
});
app.param('yourage',function(req,res,next,value){
    res.send("your age is:"+value);
    next();
});
//重定向
//localhost:3000/search
app.get('/search',function(request,response){
    response.redirect("http://baidu.com");
});
//发送一个图片
app.get('/png',function(request,response){
    response.sendfile("desktop.png",
        {
            root:'./views/'
        },
        function(err){
            if(err) {
                console.log("error") + err;
            } else{
                console.log("ok");}
        }
    );
});
//下载
app.get('/download',function(request,response){
    response.download('./views/desktop.png','img.png',function(err){
        if(err){
            console.log("err"+err);
        }else{
            console.log("download ok!");
        }
    });
});

//所有请求都经过这里
app.all('/*',function(request,response){
    console.log("recieve the request");
});
app.listen(3000);
console.log("app is running at port 3000")