var readlineSync = require('readline-sync');

  lvlofspicy = ['spicy', 'very spicy', 'so spicy you won\'t be able to feel your face'],
  answer=['Yes', 'No']
  index = readlineSync.keyInSelect(lvlofspicy, 'How spicy would you like your tacos?');
console.log('Ok, so you want your tacos to be ' + lvlofspicy[index] + ' ,are you sure about this?');
if (readlineSync.keyInYN('Yes No?')) {
    // 'Y' key was pressed.
    console.log('Ok, we will have your order right out.');
    // Do something...
  } else {
    // Another key was pressed.
    console.log('What’s the matter? Can\'t handle the heat?');
    // Do something...
  }

