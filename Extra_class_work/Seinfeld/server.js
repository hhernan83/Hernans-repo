const express= require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

// making a connection
mongoose.connect('mongodb://localhost:27017/jason_cookie_shop',{ useNewUrlParser: true, useUnifiedTopology: true,
  })
.then(()=>{
  console.log('Mongoose Connected')
}

)
.catch(error =>{
console.log(' Error connecting ', error)
})


// Blueprints
let coockieSchema = new mongoose.Schema({
    Type: String,
    Price: Number,
    Tasty: Boolean
})



let ProductModel = mongoose.model('Products', coockieSchema) 

var cookie = new ProductModel(
{
    Type: 'Raisin',
    Price: 2.49,
    Tasty: false
})


// Write queries
cookie.save(function(error, results){
    if(error){
        console.log('there was an error saving to db')
    }else{
        console.log('Data succesfuly saved: ', results)
    }
})

// ProductModel.create({
//     Type: 'Sugar',
//     Price: 1.99,
//     Tasty: true
// },
//     (error, results)=>{
//         error?
//         console.log('Error: ', error)
//         : console.log('Here is your new user: ', results)
//     })



app.get('/', (req,res)=>{
    res.send('A am the Root Route')
})


app.listen(PORT, function(){
 console.log('App listening on port', PORT)
})