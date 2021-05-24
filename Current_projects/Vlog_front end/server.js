const express= require('express')
const app = express()
app.use(express.static('public'))
const logger = require('morgan')
app.use(logger('production'))

app.set('view engine','ejs')
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/vlog', (req,res)=>{
    res.render('vlog')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

PORT= process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`APP listening on port ${PORT}`))