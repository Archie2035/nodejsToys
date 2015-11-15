var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
db.connection.on("error",function(err){
    console.log("连接数据库失败"+err);
});
db.connection.on("open",function(){
    console.log("连接数据库成功");
    if(db == mongoose){
    }
});
var myschema = mongoose.Schema({
    name:{type:String,index:1},
    age:{type:Number},
    sex:{type:String},
    email:{type:String},
    addtime:{type:Date, default:Date.now}
});

var myModel = db.model("myUser",myschema);
/*
//创建用于测试的docment
myModel.create([
    { name:"test1", age:20 },
    { name:"test2", age:30 },
    { name:"test3", age:24 },
    { name:"test4", age:18 },
    { name:"test5", age:60 },
    { name:"test6", age:50, email:"t6@qq.com" },
    { name:"test7", age:40, email:"t7@163.com" },
    { name:"test8", age:27 },
    { name:"test9", age:27, email:"t9@yeah.net" },
    { name:"test10",age:65 }
],function(err,doc){
    if(err){
        console.log("create err"+err);
    }else{
        console.log("create ok\n"+doc);
    }
});
*/
/*
myModel.find({},{name:1,_id:0},function(err,docs){
    if(err){
        console.log("find err"+err);

    }else{
        console.log("find ok\n"+docs);
    }
});
*/
/*
//查找一个符合结果
myModel.findOne({age:27},function(err,doc){
    if(err){
        console.log("findone err"+err);
    }else{
        console.log("findone ok"+doc);
    }
});
*/
/*
//根据id查找一个符合的结果
myModel.findById("5648859c252b18a93122a69d",function(err,doc){
    if(err){
        console.log("findByID err"+err);
    }else{
        console.log("find ok\n"+doc);
    }
});
*/
/*
//选取一个范围进行查找
myModel.find({"age":{"$gt":10,"$lt":30},"name":{"$ne":"test4"}},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});
*/
/*
//in固定集合查找
myModel.find({"age":{"$in":[27,24]},"name":{"$ne":"test4"}},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});
*/
/*
//or或查找，满足条件之一
myModel.find({"$or":[{"name":"test4"},{"age":27}]},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});
*/

//根据是否有该字段进行查找
myModel.find({email:{$exists:true}},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});




