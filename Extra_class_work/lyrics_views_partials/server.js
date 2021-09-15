const express = require('express')
const app = express()
const fetch= require('node-fetch')
app.use(express.static('public'))
let endpoint= 'https://api.lyrics.ovh/v1'
const PORT = process.env.PORT || 3000
// https://api.lyrics.ovh/v1/artist/title
app.get('/', (req, res)=> {
    res.render('home.ejs')
})
// responds to anyone asking for a get request
//sent to {this server}/lyricResults
// e.g. localhost:3000/lyricResults
// or www.mywebsite.com/lyricResults
app.get('/lyricResults', (req,res)=>{
    let url= `${endpoint}/${req.query.artist}/${req.query.title}`
    //fetch(url,{methid: 'GET'})
    fetch(url)
    .then(response=>{
        if (!response.ok){
            throw Error('Issue with recieving response')
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
       let newlyrics = data.lyrics.replace(/\n/g,'<br>')
        res.render('lyricResults.ejs',{newlyrics})
    })
    .catch(function(err){
        console.log("Issues with "+err)
        res.render('errors.ejs', {error:'No matches found'})
    })
    
    
})
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))