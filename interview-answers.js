//What are the different data types present in javascript?

// Primitive Data Types
"string";
true;
12;
1n;
("symbol");
undefined;
null;

// Non-primitive (structured) Data Type
{
} // or []
function something() {}

//What is the difference between “==” and “===” operators.
"1" == 1; // true
"1" === 1; // false

//Explain Implicit Type Coercion in javascript.
"1" == 1;
1 == 1;
"1" == "1";

//Is javascript a statically typed or a dynamically typed language?
let x = 1; // number type
x = "1"; // string type

//Explain how to declare a variable and assign it a value.
let varName = 1; // most common
var _varname = 1;
const $100 = 1;

//What are the naming conventions for variable names?

//Explain Hoisting in javascript.

//What is the DOM?
let dom = "Document Object Model";

// <h1 class="title pageHeading" id="titleHeading">Heading</h1>
let h1 = {
  textContent: "Heading",
};

//What are object prototypes?

// Connecting objects
// Allows inheritence (properties and methods) from prototypes to instances

function talk(message) {
  console.log(this.name + " " + message);
}

function Person(name) {
  this.name = name;
  this.speak = talk;
  console.log(this);
}

new Person("Ben").speak("says hello.");

//What is the use of a constructor function in javascript?

// Builds, or constructs, an object instance from a class or prototype

class Student {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
}

//Explain “this” keyword.

// Refers to the caller's object scope, context

//What is NaN property in JavaScript?

//Explain passed by value and passed by reference.

//Explain Higher Order Functions in javascript.

// Functions that operate on other functions, either by
// taking a function value as a parameter or returning a function value

//What are callbacks?

let arr = [1, 2, 3, 4, 5];

function map(callback) {
  let copy = [];
  for (let index = 0; index < arr.length; index++) {
    copy.push(callback(arr[index], index, arr));
  }
  return copy;
}

function callback(val, idx, arr) {
  return val ** idx;
}

console.log(map(callback));

console.log(arr.map(callback));

let btn = document.querySelector("#btn");
let feedback = document.querySelector("#time");
let time = 60;
let count = 0;

let timer = setInterval(() => {
  if (time == 0) {
    clearInterval(timer);
    feedback.textContent = "Wow, you clicked the button " + count + " times!";
    btn.disabled = true;
    return;
  }
  feedback.textContent = --time;
}, 100);

btn.addEventListener("click", () => {
  btn.textContent = "Clicked " + ++count;
});

// Function value that you pass to a HOF, that is called after some action finishes

//What is recursion in a programming language?

//Explain Closures in JavaScript.

//Explain Scope and Scope Chain in javascript.

//Explain call(), apply() and, bind() methods.

//What is Currying in javascript?

//What is an Immediately Invoked Function in javascript?
// (function functionName() {})()

// (() => {})()

// (function justDefined() {
//   console.log("Just defined");
// })();

//What is memoization?
