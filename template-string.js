const str1 = 'Hello World';
const str2 = "Hello World";

// template String 
const templateString = `Hello World`;
// old version
const multiline = 'This is line 1 \n' +
    'this is line 2 \n' +
    'this is line 3 \n' +
    'this is line 4 \n';

// ES6 version

const multilineNew = `This is line 1 
this is line 2
this is line 3
this is line 4`;
// console.log(multilineNew);

// ---->>  Power of Template String  <<----

const firstName = 'MOkta';
const lastName = 'Allo';
const birthDay = 13;
const profession = 'Student';
const favPersion = 'Suhag';
const herFriends = ['Suhag ', 'Afrin ', 'Anika ', 'Romana ', 'Somi '];
const her = `Her name is: ${firstName} ${lastName}. Her birthday is: ${birthDay}. She is a ${profession}. Her most favorite persion is ${favPersion}. She has ${herFriends.length} friends. They are ${herFriends}. She has ৳ ~ ${(herFriends.length + 10 - 5 / 2) * 1000}`;

console.log(her);