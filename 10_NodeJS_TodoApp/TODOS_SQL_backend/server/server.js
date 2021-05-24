const express=require('express')
const logger= require("morgan")
const bodyParser = require('body-parser')
const Mongoose=require('mongoose')
const app = express()
const cors =require('cors')
const mongoose = require('mongoose')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
PORT= process.env.PORT || 3000
app.use(logger("dev"));


//sql NPM
const{Client} = require('pg')
const debug=require('debug')('apiserver:server')

let connectionObject ={
    host : "mongodb.accsoftwarebootcamp.com",
    database : "accsoftwarebootcamp",
    port : 5432,
    user : "acc",
    password : "accrocks"
   
}

const client = new Client(connectionObject)

client.connect()
.then(function(){
    console.log(`pg Connected to ${client.database} db`)
})
.catch(function(err){
    console.log(`Pg Connection error`, err.stack)
})





app.get("/", function(req, res) {
    res.send("Hello");
  });

// reading data as a get request
app.get('/todos',(req,res)=>{
   let query = `SELECT id as _id,
                    description,
                    isComplete AS "isComplete"
                    FROM todos.todos
                    ORDER BY todos.id`
    client.query(query,function(err,todos){
        if(err){
            console.log('Error: ', err)
            res.status(400).send({code:1234, message: 'Error: ' + err})
        }
        else{
            res.send(todos.rows)
        }
    })
})

// adding a todo item into our toDo Array
app.post("/todos",(req,res)=>{
    //your new description value is captured here
    let newDescription= req.body.description;
    console.log(newDescription)
    //handeling the success or failiure of capturing a value in newDescription
    if(!newDescription){
        res.status(411).send({code:123455, message: 'Empty todo recieved'})
    }else{
        // inserting newDescription into todos.todos by setting it as the value of new object description
        let query= `INSERT INTO todos.todos
                        (description,isComplete, user_id)
                        VALUES ('${newDescription}', false, 2)
                        RETURNING id AS _id, description, isComplete`;
            // running our query in if else statement handeling the send and error
            client.query(query,function(err,todo){
                if(err){
                    console.log('Error: ', err)
                    res.status(400).send({code:1239, message: 'Insert Error: '+err})
                }
                else{
                    debug('Returned todo: ', todo.rows[0])
                        // returns an array with only 1 object in it
                        // the object still has to be specified 
                    res.send(todo.rows[0])
                }
            })
    }
    
    
})

app.delete('/todos/:id',(req,res)=>{
 // setting up our query
 let query = `DELETE FROM todos.todos
                WHERE todos.id = ${req.params.id}`;
    // rinning our query
    client.query(query,function(err,result){
        //failiure
        if(err){
            console.log(err.stack)
            res.end()
        }
        //success
        else{
            debug('Item has been deleted from db');
            res.send();
        }
    })
})



app.put('/todos/:id',(req,res)=>{
  // assigning our query or SQL command
  let query= `UPDATE todos.todos
                SET isComplete = NOT isComplete
                WHERE id = ${req.params.id} RETURNING*`;//<- selecting our clicked id and updating isComplete to toggle and returning all
            //runing our query
            client.query(query,function(err,result){
                if(err){
                    console.error(err.stack)
                    res.end()//<-terminating callback function
                }
                else{
                    debug('Updated isComplete for', result)//<- 
                    res.send(result.rows)
                }
            })
})






app.listen(PORT, ()=>{
    console.log('App running on port: ', PORT)
})