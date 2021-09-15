const express =require('express')
const app = express()

const PORT= process.env.PORT || 3000

var Pizza= "I like my pizza with extra pineapple."
var cappuccino= 'I like my Cappuccino to be sweet.'
var fries= 'I like my fries crispy with extra salt.'
app.get('/', (req,res)=>{
    res.render('home.ejs',{Pizza})
})

app.get('/about', (req,res)=>{
    res.render('about.ejs',{cappuccino})
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs', {fries})
})

app.listen(PORT,()=>{
    console.log('APP listening on PORT:', PORT)
})