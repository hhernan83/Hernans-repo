const express= require('express')
const app =express()
const fetch= require('node-fetch')
app.use(express.static('public'))

const PORT= process.env.PORT || 3000

let coin = "https://api.coindesk.com/v1/bpi/currentprice.json"
app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.get('/results',(req,res)=>{


    let currencyChosen = req.query.currency;
    
    fetch(coin)


    .then(response =>{
    
     return response.json()
    })
    .then(data=>{

      console.log(data.bpi[currencyChosen])
        res.render('results.ejs', {data: data.bpi[currencyChosen]})
    })
    .catch(err=>{
        console.log('Problem getting response from api: ', err)
    })
    
})


app.listen(PORT, ()=>{
    console.log('App listening on port', PORT)
})