const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const casual = require('casual')
const mongoose = require('mongoose')
// CONNECTION
const url = 'mongodb://localhost:27017/clients'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(()=>{
    console.log('Issue connecting to database')
    mongoose.disconnect()
})
// Blueprints - Schema and Model
const customerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    phone: String
})
const CustomerModel = mongoose.model('customers', customerSchema)
app.get('/', (req, res)=>{
    res.render('Index.ejs')
})
app.get('/CreatePage', (req, res)=>{
    res.render('createPage.ejs')
})
app.get('/CreateData', (req, res)=>{
    // create fake data
    // let element = {
    //     fName: casual.first_name,
    //     lName: casual.last_name,
    //     phone: casual.phone
    // }
    CustomerModel.create(
        {
        fName: casual.first_name,
        lName: casual.last_name,
        phone: casual.phone
        },
        (err, customer)=>{
            err ?
                console.log('Error: ', err)
                : res.render('results.ejs', { data: customer})
        }
    )
    
})
app.get('/ReadPage', (req, res)=>{
    CustomerModel.find({}, (err, customers)=>{
        err?
            console.log('Error: ', err)
            : res.render('ReadPage.ejs', { data: customers})
    })
    // db.customers.find()
    
})
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))