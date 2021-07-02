"use strict";

class InvalidNumber extends Error {}
class OutOfRangeError extends Error {}

let feedbackP = document.getElementById("feedback");
let submitBtn = document.getElementById("submit");

console.log(typeof number);

submitBtn.addEventListener("click", function () {
  let number = document.getElementById("number").value;
  let magicNum = 16;
  let min_guess = 0;
  let max_guess = 100;
  let feedback = "";

  try {
    let parsedGuess = parseInt(number);
    if (isNaN(parsedGuess)) {
      throw new InvalidNumber("Not a value number value");
    } else if (parsedGuess > max_guess || parsedGuess < min_guess) {
      throw new OutOfRangeError("Number was not between 0 and 100");
    } else {
      feedback = `${parsedGuess} is equal to ${magicNum}: ${
        magicNum == parsedGuess
      }`;
    }
  } catch (error) {
    if (error instanceof InvalidNumber) {
      feedback = "Please input a valid number.";
    } else if (error instanceof OutOfRangeError) {
      feedback = "Please input a number 0 and 100.";
    } else {
      throw error;
    }
  } finally {
    feedbackP.textContent = feedback;
  }
});
