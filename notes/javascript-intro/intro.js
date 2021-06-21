// Assign function to a variable
let isEven = function (number) {
  return number % 2 == 0;
};

let answer = isEven(25); // false

// Declare a function
function printThreeNames(name, name2, name3 = "Unknown") {
  console.log(name, name2, name3);
}

let answer = isEven(18577295783084); // true

let result = printThreeNames("Ben", "Seth", "Cruz"); // undefined
