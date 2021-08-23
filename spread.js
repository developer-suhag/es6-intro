// >>---->> spread operator <<------<<

const numbers = [34, 65, 23, 99, 11, 77, 88];

// console.log(...numbers);

const max = Math.max(34, 65, 23);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const newNumbers = [22, ...numbers, 45]

numbers.push(111);

console.log(newNumbers);