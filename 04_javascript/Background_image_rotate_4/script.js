var backgroundImages= ["background1.jpg","background2.jpg","background3.jpg"]
var index= 1;

function rotateImage(){

    document.querySelector("body").style.backgroundImage = "url('"+ backgroundImages[index] + "')";
//increase the index
//Check to see if the index goes past the end of the array
//if it does then reset it back to zero
index++;

if(index > backgroundImages.length -1){
    index = 0;
}

};


setInterval(rotateImage,5000);
