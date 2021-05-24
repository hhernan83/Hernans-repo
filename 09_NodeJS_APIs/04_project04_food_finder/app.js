const express= require('express')
const yelp= require("yelp-fusion")
const fetch= require('fetch')
const app = express()
app.use(express.static('public'))
const PORT= process.env.PORT ||  3000
// insert apikey in yelp.client
const client = yelp.client('vPzqiQZR35u54VDMj6oBi9dKN58U-GcJx52axGEwUc-UxS320uWDeKvKFiSC4dsJ0oUZ8xDyL4xjOUMp6d3KqbFNzvAPA_JmOOciHFQ-3MdPc_tcSkDa5iC5ru9HX3Yx');
const clientId= "kl7b_me7EFPqnrMD_HuLkw"

const endpoint= "https://api.yelp.com/v3/businesses/search"
const url="https://api.yelp.com/v3/businesses/kl7b_me7EFPqnrMD_HuLkw"
console.log(url)




app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/results',(req,res)=>{
    var location= `${endpoint}/${req.query.location}`
    console.log(location)
    client.search({
        location: location,
       
      }).then(response => {
          
        console.log(response.jsonBody.description);
        let data= response.jsonBody.description
        res.render('results.ejs', {data})
      }).catch(e => {
        console.log(e);
      });


})


app.listen(PORT,()=>{
    console.log('App is litening on port', PORT)
})