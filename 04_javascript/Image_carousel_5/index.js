var galleryImages= ["image1.jpg","2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg"]

var index=0;

var image = document.querySelector("#image");

const decrease = ()=>{
    index--;
   

    if(index<0){
        index = galleryImages.length-1;
    }
    image.setAttribute("src", galleryImages[index])
     console.log(index);
}

const increase =()=>{
    index++;
   

    if(index> galleryImages.length -1){
        index= 0;
        
    }
    image.setAttribute("src", galleryImages[index])
     console.log(index);
}

// console.log(index);

// function decrease(){
//  index--;
//     if (index<0){

//     }
// }
