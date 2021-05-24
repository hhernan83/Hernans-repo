var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name? ');
console.log('Hi ' + userName + '!');

var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  console.log('Oh, ' + userName + ' loves ' + favFood + '!');

var favdrink = readlineSync.question('What is your favorite drink? ',{
   hideEchoBack: true
})  

console.log('oh, '+userName+' loves '+favFood+' and your favorite drink is '+favdrink+' !')