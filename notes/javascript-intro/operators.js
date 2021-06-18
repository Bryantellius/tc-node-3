// Arithmetic Operators

// Addition
1 + 1;

// Subtraction
1 - 1;

// Multiplication
1 * 2;

// Division
2 / 2;

// Modulus (Division Remainder)
2 % 2; // 0

// Assigment Operators
let y = 3;

// Comparison Operators

// == 'Loose' equality
1 == 1;

// === 'Strict' equality
1 === 1;

// != 'Loose' inequality
2 != "2"; // false

// !== 'Strict' inequality
2 !== 2; // false

// > Greater than
2 > 1;

// < Lesser than
2 < 1;

// >= Greater than or equal to
2 >= 1;

// Lesser than or equal to
2 <= 1;

let age = 30;
let ageAsString = "30";

console.log(age == ageAsString); // true
console.log(age === ageAsString); // false

// Logical Operators

// || Logical OR
2 > 1 || 1 == 1; // true

// && Logical AND
2 > 1 && 1 != 1; // false

// ! Logical NOT or negation
!true; // false

let num = 10023;
let oddBool = num % 2 == 1;
let x = false;

let res = !oddBool || x; // false

// Pre/Post Increment/Decrement

let age1 = 30;

// some event is triggered
// I need to use age1 then increment

console.log(age1++);

let year1 = 1;
let days = 365;

// Increment year by 1, the multiply by days (365)
let pretotal = ++year * days;

// Multiply by days (365), then increment year by 1
let posttotal = year++ * days;

// Type coercion turns the "0" into a number, then evaluates 0 == 0
console.log(0 == "0"); // true
// Type coercion turns the "0" into a number, then into a boolean, then evaluates false == false
console.log(false == "0");
