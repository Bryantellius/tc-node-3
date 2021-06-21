// Ignore Even
// Count from 100 to 1
// Print even numbers

for (let i = 100; i > 1; i -= 2) {
  console.log(i);
}

// FIZZ BUZZ
// Count from 1 to 100
// Print FIZZ if number is divisible by 3
// Print BUZZ if number is divisible by 5
// Print FIZZBUZZ if number is divisible by 3 and 5

for (let i = 1; i <= 100; i++) {
  // iterate from 1 to 100
  let output = "";

  // Use mod (division remainder) to find if any number is divisible (evenly) by another number
  if (i % 3 == 0) {
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${i} ${output}`);
}
