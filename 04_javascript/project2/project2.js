var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");

var name = prompt("Tell me your name");
var number= prompt("Give me a number");
var number2= prompt("Give me another number");
var total= +number + +number2

function day(){
    output.innerHTML= "You are going to have a wonderful day "+name+ ".";
}
day();

function num(){
    output2.innerHTML= "by the way, the sum of your numbers is "+total + ".";
}
num();