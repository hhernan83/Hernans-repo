const express = require('express')
const app= express()

PORT= process.env.PORT || 3000



app.get('/', (req,res)=>{
    res.render('home.ejs')
})
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})
app.get('/donut', (req,res)=>{
    res.render('thanks.ejs')
})

app.listen(PORT, ()=>{
    console.log('App running on port:',PORT)
})