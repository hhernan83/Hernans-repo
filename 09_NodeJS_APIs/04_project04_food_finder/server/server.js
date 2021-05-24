// Foundation
const express = require('express')
const app = express()
// Route Handlers
// app.get('/', function(req, res){
//     res.send('I made it Yeah!!! JM')
// })
// app.get('/cat',function(req, res){
//     res.send('I like cats!!!!')
// })
// app.get('/dog', (req, res)=>{
//     res.send('Dog lover')
// })
// app.get('/dog/woof', (req, res)=>{
//     res.send('Dog Woofer')
// })
// app.get('/:animal', (req, res)=>{
//     // console.log('Hello')
//     res.send(`I like ${req.params.animal}`)
//     res.send(`I like ${req.params.animal}`) 
// })
// route /account/ANYNAME/amount/SOMENUMBER
// in browser I want to see
//   Hello ANYNAME. You have SOMENUMBER dollars!!!
// Build a route that send the above info back
// app.get('/account/:ANYNAME/amount/:SOMENUMBER', (res, res)=>{
//     res.send(`Hello ${req.params.ANYNAME}. You have ${req.params.SOMENUMBER} dollars!!!`)
// })
// Listener
app.listen(3000, function(){
    console.log('App listening on port 3000')
})
// res.end()
// res.send()
// res.json()
// res.render()
