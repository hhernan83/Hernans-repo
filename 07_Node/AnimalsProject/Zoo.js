var animals = require('animals');
var Log = require('log.pets');


console.log(animals())

Log.lion()

Log.zoo(animals(),animals(),animals())

console.log(`# of characters in the db: `+animals.words.length)
let names = animals.words.filter(function(el){
    return el.substring(0,3) == "G"
  })


  let match= ()=>{
      if(names[0] == " "){
          return names[0]
      }
      else{
          return "No matches Found"
      }
  }
  console.log(`# of Animals starting with G: `+match())
  console.log('# of animals starting with G: '+ names.length)