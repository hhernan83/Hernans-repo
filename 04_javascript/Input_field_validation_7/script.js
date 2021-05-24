var password = document.getElementById("password");
var email= document.getElementById("email");
var form= document.querySelector("#form")


form.addEventListener("submit",function(event){
  
    if(document.querySelector("#email").value.length<=0){
  alert("Please check the fields and make sure they are not blank.");
  event.preventDefault()    
}
if(document.querySelector("#password").value.length<= 0){
    alert("Please check the fields and make sure they are not blank.");
    event.preventDefault()
}
})



