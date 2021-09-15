var marvel = require('marvel-characters')


console.log(marvel())

console.log(`# of characters in the db: `+marvel.characters.length)

let names = marvel.characters.filter(function(el){
  return el.substring(0,3) == "Man"
})
console.log(names)
let IronMan = marvel.characters.filter(el=>{
    return el == "Iron Man"
})

let result = IronMan.length !=0 ? IronMan: "No matches found"

console.log(result)
console.log(IronMan)
