let num1 = parseInt(prompt("Type your age in years!"))

// Function declaration
function calculateAgeInSeconds(age) {
  let secondsInADay = 24 * 60 * 60;
  let ageInSeconds = age * 365 * secondsInADay;
  return ageInSeconds;
}

// Using a function (invoking a function)
let result1 = calculateAgeInSeconds(num1);

alert(result1);