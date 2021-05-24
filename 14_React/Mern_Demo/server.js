const express= require('express')
const app = express()
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const url = 'mongodb://localHost:27017/mern_demo'
mongoose.connect(url, {useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log('connected'))
.catch()

let mernSchema= new mongoose.Schema({
    fname:{
    type: String,
    required: [true,'First Name is required!!']
    }
    // lname:{
    //     type: String,
    //     required: [true,"Last name is required"]
    // }
})

let MernModel= mongoose.model('Mern',mernSchema)

app.get('/test',(req,res)=>{
 res.json({message:'I am connected!'})
})

app.post('/new',(req,res)=>{
    MernModel.create({
        ...req.body
         }, function(err, result){   
             let message = err ? err : result;
             res.json(message)
         })
// res.send(req.body)

})




app.listen(PORT, ()=>console.log('App listening on port: ', PORT))