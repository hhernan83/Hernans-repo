const express=require('express')
const logger= require("morgan")
const bodyParser = require('body-parser')
const Mongoose=require('mongoose')
const app = express()
const cors=require('cors')
const mongoose = require('mongoose')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
PORT= process.env.PORT || 3000
app.use(logger("dev"));
// url to our database basic url('mongodb://localhost:27017/{database name}')
const url='mongodb://localhost:27017/MongoTodoApp'

//our mongoose database connection
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log(`Connected to ${url} database.`)) //<- sccesfulconnection will display that we are connectes and the url of our database
.catch(err=> console.log(`Issue connecting to ${url} database: `,err))// <- will display error along with database url we failed to connect

//building our basic schema to use 
// we do not need and id because our database will lcreate one for us
let todoSchema= mongoose.Schema({
    description:{
        type: String,//<-our description will have a value of String
        required:[true,"Must have a description for the todo item."]//<-true value means this cannot be an empty string
    },
    isComplete:{
        type:Boolean,//<- isComplete will have a data type of Boolean
        default: false // <- by default when created this Boolean will be assigned false
    }
    
})


// our todo model will be our todoSchema
let TodoModel=mongoose.model('Todo',todoSchema)

app.get("/", function(req, res) {
    res.send("Hello");
  });

// reading data as a get request
app.get('/todos',(req,res)=>{
    //searches our 
    TodoModel.find({},function(error,results){
        if(error){
            console.log('Error: ',error)
        }
        else{
            console.log('Found all todos: ', results)
            res.json(results)
        }
    })
})

// adding a todo item into our toDo Array
app.post("/todos",(req,res)=>{
    // new todo description inserted as new TodoModel
    let newTodo= new TodoModel({
        description: req.body.description
    })
    //Svaing our new todo
    newTodo.save(function(error,result){
        if(error){
            // Console logging our error
            console.log('Error:', error)
            // if error we will automatically disconnect from our db
            mongoose.disconnect()
        }
        else{
            // console logging our results
            console.log('Saved new todo: ',result)
            // sending our new todo back to our client
            res.status(201).json(result)
        }
    })
   
    
    
})

app.delete('/todos/:id',(req,res)=>{
    // selected todo id (in postman todos/(enter todo id))
    // req.params gives you an object {id:"1"} so req.params.id mwill give you the string value of the id
    // then you just have to parse  
    
    let requestedToDoId =req.params.id;// {_id:986975875e6876r73}
    console.log(req.params.id)
    // TodoModel= Collection we are finding item 
   TodoModel.findByIdAndDelete(requestedToDoId,function(error,results){
       if(error){
           //sending status for our error and letting our user know it cannot be found
           res.status(400).send('Id does not exist for deletion')
       }
       else{
           // sending succes status and then sending our deleted item back to our client
           res.status(201).send(results)
       }
   })
})



app.put('/todos/:id',(req,res)=>{
    // select our id /todos/(insert todo number)
    let requestedToDoId = req.params.id
    console.log( req.params.id)
        //finding the todo in the array
  TodoModel.findById(requestedToDoId,function(error, todo){
      if(error){
          res.status(666).send('Id does not exist for updating')
      }
      else{
          todo.isComplete = !todo.isComplete
          todo.save(function(err, updatedTodo){
              if(err){
                  res.status(667).send('Cannot update document')
              }
              else{
                  res.status(202).send(updatedTodo)
              }
          })
      }
  })
})






app.listen(PORT, ()=>{
    console.log('App running on port: ', PORT)
})