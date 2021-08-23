// >>---->> simple arrow function <<------<<
const add = (num1, num2) => num1 + num2;

const addition = add(4, 6);
// console.log(addition);

// >>---->> multiple parameter <<------<<
// const multiply = (num1, num2, num3, num4 ........) 

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplication = multiply(2, 5, 12);
// console.log(multiplication);

// >>---->> single parameter <<------<<
const tenTimes = (num) => num * 10;

const fiveTimes = num => num * 5;

const ten = tenTimes(6);
const five = fiveTimes(10);
// console.log(ten, five);

// >>---->> without parameter <<------<<

const getName = () => 'Brandon Edich';

const names = getName();
// console.log(names);

// >>---->> multi line function <<------<<

const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const multipy = add * diff;
    const result = multipy * 5;
    return result;
}

const total = doMath(9, 6);
console.log(total);