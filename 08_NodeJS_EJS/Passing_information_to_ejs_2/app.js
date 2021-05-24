const express =require('express')
const app = express()

const PORT= process.env.PORT || 3000

var messages = [
    {name: "Jim", message: "I'm a cartoonist"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter"}
 ]

app.get('/',(req,res)=>{
    res.send('I am the root route')
})

app.get('/messages',(req,res)=>{
    res.render('messages.ejs',{messages})
})

app.listen(PORT,()=>{
    console.log('APP listening on PORT:', PORT)
})