var number= prompt("Give me a number");
var number2= prompt("Give me a number again");
var number3= prompt("Give a number again");
var nums =[number, number2, number3];
var sum = 0

for(var i=0; i < nums.length; i++){

    sum += parseInt(nums[i]);
    

}

var text= "The sum of all of your numbers is " +sum


document.querySelector("#total").innerHTML= text

