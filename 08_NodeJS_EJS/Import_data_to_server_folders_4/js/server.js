const express=require('express')
const app=express()
const data= require('data.js')
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res,render('home.ejs')
})
console.log(data)
app.listen(PORT, ()=>console.log('App listening on port '+ PORT))