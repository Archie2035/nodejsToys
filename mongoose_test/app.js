/**
 * Created by wq on 15-11-15.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
db.connection.on("error",function(err){
    console.log("连接数据库失败"+err);
});

db.connection.on("open",function(){
    console.log("数据库连接成功");
});
//创建数据存储结构
var testschema = mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String},
    email:{type:String},
    addtime:{type:Date, default:Date.now}
});
//创建model
var testMode = db.model("myUser",testschema);
//查

testMode.find({"age":25},function(err,docs){
    if(err){
        console.log("find error"+err);
    }else{
        console.log("find ok\n"+docs);
    }
});

//使用model增
testMode.create({name:"ww",age:24,sex:"女"},function(err,doc){
    if(err){
        console.log("create err"+err);
    }else{
        console.log("create ok\n"+doc);
    }
});
//使用entity增
var Entity = new testMode({
    name:"entity_save",
    age: 27});

Entity.save(function(err,doc){
    if(err){
        console.log("save err"+err);
    }else{
        console.log("save ok\n"+doc);
    }
});

//更新
var updateConditions = {name : 'entity_save'};
var update = {$set : { age : 16 }};
testMode.update(updateConditions, update, function(error){
    if(error) {
        console.log("update err"+error);
    } else {
        console.log('Update ok!');
    }
});

var removeConditions = {name:'entity_save'};
testMode.remove(removeConditions,function(err){
    if(err){
        console.log("remove err"+err);
    }else{
        console.log("remove ok!");
    }
});