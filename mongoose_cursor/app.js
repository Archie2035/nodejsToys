/**
 * Created by wq on 15-11-15.
 */
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
//limit 设置查找结果上限
myModel.find({},null,{limit:2},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});
*/
/*
//跳过两个结果，只显示name和age
myModel.find({},{name:1,age:1,_id:0},{skip:2},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});
*/
/*
//根据age倒序
myModel.find({},{name:1,age:1,_id:0},{sort:{age:-1}},function(err,docs){
    if(err){
        console.log("find err"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});
*/