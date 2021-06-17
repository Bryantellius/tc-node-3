// var, function scoped

var age = 30;

// let, block scoped

let cartons = 5;

// Re-assign variable values

cartons = 4;

// const, block scoped

const doesNotChange = true;

// Declaring Variables

var age;

// Assigning values to variables

var age = 30;

// Re-declare a variable

// can re-declare a variable using var
var age = "age";

// cannot re-declare using let or const
// const age = 45;

// Camel Case for names with more than one word
let thisIsAnExampleOfCamelCase = true;

// Value Types

// Number
let numOfBottles = 7;

// String
const firstName = "Ben";

// Boolean
let isOnline = false;

// Undefined
let message; // undefined

// Null
let middleInitial = null;

// BigInt
let largeNumber = 12345678901234567890n;
console.log(largeNumber);

// Use console.log(...) to print values to the browser developer console
console.log("Ben Bryant");
console.log(numOfBottles);

// Combine strings with '+', called concatenation
console.log("Ben" + "Bryant");
