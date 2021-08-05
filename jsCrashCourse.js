// console.log('Hello World')

// console.error('This is an error')

// console.warning('This is a warning')

// var, let , and const...Use let or const

// "let" allows you to change or reasign variable

// let age = 30;
// age = 31;

// console.log(age)

// Data Types: String, Numbers, Boolean, null, undefined, Symbol

const myName = "James";
const age = 30;
const rating = 4.5;
const isCool = true;
// null is variable but there is nothing in it
const x = null;
const y = undefined;
//let z is undefined
let z;
// console the type of function of different variables
console.log(typeof isCool);

// Strings
// concatenation

// const hello = `my name is ${myName} and I am ${age}`;

// console.log(hello);

const s = "Hello World";
const k = "technology, computers, it, code";
// display length of characters in string
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// split s into index of first five letter then upper case them
console.log(s.substring(0, 5).toUpperCase());
// split const s into array of each letter seperated
console.log(s.split(""));
// split const k into array of each word seperated
console.log(k.split(", "));

// Array - variables that hold multiple values.axis
// new Array is constructed array using new = constructor
const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers);

const fruits = ["apples", "oranges", "pears", "berries"];
// const orangeFruit = fruits.filter((orange) => orange == 'oranges' );
// add grapes to 3rd index of array **not recommended way**.
fruits[3] = "grapes";
// add mangos to end of array
fruits.push("mangos");
// add stawberries to beginning of array
fruits.unshift("strawberries");
// pop off last item in array
fruits.pop();
// check if the array is an array and give either true or false if array

console.log(Array.isArray(fruits));
// get index of item inside the away
console.log(fruits.indexOf("oranges"));
console.log(fruits);

console.log(fruits[1] + " and " + fruits[3]);
