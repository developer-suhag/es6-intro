// >----->> function declaration <<------<
function add(num1, num2) {
    return num1 + num2
}

// >----->> function expression <<------<
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

// >----->> function expression (Anonymous) <<------<
const add3 = function (num1, num2) {
    return num1 + num2;
}

// >----->> Arrow Function <<------<

const add4 = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const division = (num1, num2) => num2 / num1;

const subtraction = (num1, num2) => num2 - num1;

const modolus = (num1, num2) => num2 % num1;

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const name = fullName('Suhag', 'Al Amin')


const sum = add(12, 85);
const sum2 = add2(12, 85);
const sum3 = add3(12, 85);
const sum4 = add4(12, 85);
const sum5 = multiply(12, 85);
const sum6 = division(12, 85);
const sum7 = subtraction(12, 85);
const sum8 = modolus(12, 85);



console.log(sum, sum2, sum3, sum4, `Multiplication result: ${sum5}.`, `Division Result: ${sum6.toFixed(2)}.`, `Subtraction Result: ${sum7}.`, `Modolus Result: ${sum8}.`);


console.log(`Programmer Name is: ${name}`);