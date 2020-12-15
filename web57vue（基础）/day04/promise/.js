const express = require("express")

const app = express()

const cors = require('cors')

const bodyParse = require('body-parser')
// 解析json格式的post请求
app.use(bodyParse.json())

app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/axios-json',(req,res)=>{
    res.json({
        username:'jjy',
        age:26
    })
})

app.get('/async1',(req,res)=>{
    res.send("hello")
})
app.get('/async2',(req,res)=>{
    if(req.query.info == 'hello') {
        res.send("world")
    }else {
        res.send("error")
    }
})
app.get('/adata',(req,res)=>{
    res.send("hello axios!")
})
app.get('/axiosget/:id',(req,res)=>{
    res.send("get传参方式restful"+req.params.id)
})
app.get('/axiosget',(req,res)=>{
    res.send("get传参方式"+req.query.id)
})
app.delete('/adata',(req,res)=>{
    res.send("hello axios!")
})
app.delete('/axiosdel/:id',(req,res)=>{
    res.send("delete传参方式restful"+req.params.id)
})
app.delete('/axiosdel',(req,res)=>{
    res.send("delete传参方式"+req.query.id)
})
app.post('/axiospost',(req,res)=>{
    res.send("post传参方式"+req.body.username + req.body.age)
})
app.put('/axiosput',(req,res)=>{
    res.send("put传参方式"+req.body.username + req.body.age)
})

app.get('/get',(req,res)=>{
    res.send({
        status:0,
        message:"获取用户信息成功",
    })
})
app.get('/get1',(req,res)=>{
    res.send({
        status:0,
        message:"获取用户信息成功1",
    })
})
app.get('/get2',(req,res)=>{
    res.send({
        status:0,
        message:"获取用户信息成功2",
    })
})
app.get('/fetchget',(req,res)=>{
    res.send("get获取数据成功"+req.query.id)
})
app.get('/fetchjson',(req,res)=>{
    res.send({
        username:"jjy",
        age:26
    })
})
app.delete('/fetchdel/:id',(req,res)=>{
    res.send("restful获取数据成功"+req.params.id)
})
app.post('/fetchpost',(req,res)=>{
    res.send("post获取数据成功"+req.body.username + req.body.type)
})
app.put('/fetchput',(req,res)=>{
    res.send("put获取数据成功"+req.body.username + req.body.type)
})
app.listen(80,()=>{
    console.log("http://127.0.0.1");
})