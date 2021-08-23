function add(num1, num2 = 0) {
    // num2 = num2 || 0;
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    return num1 + num2;
}

const total = add(23, 5);
// console.log(total);

function multipy(num1, num2 = 1) {
    return num1 * num2;
}
const result = multipy(55);
// console.log(result);


function fullName(firstName, lastName = 'Al Amin') {
    return firstName + ' ' + lastName;
};

const name = fullName('Suhag')
console.log(name);


// Shormily Raisa first 4 assignment average marks 

/* 
function average() {
    let allNum = 0;
    for (const num of arguments) {
        allNum += num;
    }
    return allNum / 4;
}

const marks = average(57, 47, 32, 48)
console.log('Your Average Mark is', marks); 
*/