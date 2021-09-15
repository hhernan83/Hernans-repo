const express= require('express')
const app = express()
const fetch= require('node-fetch')
const request=require('request')
app.use(express.static('public'))
const PORT = process.env.PORT || 3000
 
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.get('/results',(req,res)=>{
   

    let url= 'https://www.metaweather.com/api/location/2487956/'

    request(url, function(error, response, body){
       if(!error && response.statusCode === 200){

        // console.log(response)
      let parsedData=  JSON.parse(body)
      console.log(parsedData)
      res.render('results.ejs', {data: parsedData.consolidated_weather[0]})
    } else{
        res.render('results.ejs',{error: 'Error with parsed data'} )
    }
    })
})



app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))