const express= require('express')
const app= express()
const morgan= require('morgan')
// const bodyparse= require('body-parse')
app.use(morgan('dev'))

let PORT= process.env.PORT || 3000

let toDoArray=[
{id: 1,
    description: 'Call mom',
    isComplete:false},
{id: 2,
    description:'Buy groceries',
    isComplete:false },
{id:3,
        description: 'Go to movies',
        isComplete:false},
{id:4,
            discription: 'Buy more stuff',
            isComplete:false
        }]


app.get('/',(req,res)=>{
    res.send(toDoArray)
})


app.listen(PORT,()=> console.log('App is listening on port',PORT) )