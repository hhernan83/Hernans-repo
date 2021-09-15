var asciiHeart = require("ascii-heart");
 
// Default behavior
console.log(asciiHeart());
// Display small heart
console.log(asciiHeart(10, 10));
// Display a small heart,
console.log(asciiHeart(40, 40, {
    fill: "❤"
}));