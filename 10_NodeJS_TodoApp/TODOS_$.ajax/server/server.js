const express=require('express')
const logger= require("morgan")
const bodyParser = require('body-parser')
const app = express()
const cors=require('cors')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
PORT= process.env.PORT || 3000
app.use(logger("dev"));
var toDoArray=[
    {
        id: 1,
        description: 'Call mom',
        isComplete: false
    },
     {
        id: 2,
        description: 'Buy groceries',
        isComplete: false
    }, 
    {
        id: 3,
        description: 'Go to movies',
        isComplete: false
    }
];

let num = 4
app.get("/", function(req, res) {
    res.send("Hello");
  });

// reading data as a get request
app.get('/todos',(req,res)=>{
// sends back current todo array a json
    res.json(toDoArray)
})

// adding a todo item into our toDo Array
app.post("/todos",(req,res)=>{
    // new todo created and ready to update
    console.log(
       req.body.description
    )
    let newTodo=
        {
            id: num++,
            description: req.body.description ,
            isComplete: false
        }
    // inserting our todo into the end of the array with the .push() method
    toDoArray.push(newTodo)
    // will let us vies the new todo array with the new todo
    console.log(toDoArray)
    // setting a status and new todo sent back to client
    res.status(201).send(newTodo) 
    
    
})

app.delete('/todos/:id',(req,res)=>{
    // selected todo id (in postman todos/(enter todo id))
    // req.params gives you an object {id:"1"} so req.params.id mwill give you the string value of the id
    // then you just have to parse  
    let requestedToDoId = parseInt(req.params.id)
    console.log(parseInt(req.params.id))
    // finding the index location of our new todo
   let todoIndex = toDoArray.findIndex(function(todo){

   return todo.id === requestedToDoId

})
   // removing the todo with splicce (location, number of items removed)
   console.log(todoIndex)
   toDoArray.splice(todoIndex,1)
   // sending copy odf our new todo Array back
   console.log(toDoArray)
   res.send(toDoArray)
 
//    console.log(todoIndex)
//    <- todo location
//    console.log(toDoArray[todoIndex])
//    <- todo location inside our array
})



app.put('/todos/:id',(req,res)=>{
    // select our id /todos/(insert todo number)
    let requestedToDoId = parseInt(req.params.id)
    console.log( parseInt(req.params.id))
        //finding the todo in the array
        var requestedToDo = toDoArray.find(function(todo){
      
            return todo.id === requestedToDoId
        })
        // toggle the completion status(= sign is assigning value)
        console.log(requestedToDo)
        requestedToDo.isComplete = !requestedToDo.isComplete;
        // returning the updated todo
        res.status(200).send(requestedToDo)
})






app.listen(PORT, ()=>{
    console.log('App running on port: ', PORT)
})