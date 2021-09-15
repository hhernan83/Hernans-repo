const express= require('express')
const app= express()
const fetch = require('node-fetch')
app.use(express.static('public'))
PORT= process.env.PORT || 3000



const APIKey= '550?api_key=805b2c50f06bdd75cf13b7c63d16da0c'

const endpoint= 'https://api.themoviedb.org/3/movie'

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/results', (req,res)=>{
let movies= `${endpoint}/${APIKey}`
    fetch(movies)
    .then(response =>{
       
        return response.json()
    })
    .then(data=>{
        console.log(data)
        res.render('results.ejs',{data})
    })
    .catch(err=>{
        console.log('problem connecting to the api: ', err)
    })
    
})



app.listen(PORT,()=>{
    console.log('App running on PORT: ', PORT)
})