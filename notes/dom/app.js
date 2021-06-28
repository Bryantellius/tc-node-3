let h1 = document.getElementById("haveFun");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let input = document.getElementById("tallies");

let numOfClicks = 0;

addBtn.addEventListener("click", function (event) {
  numOfClicks += parseInt(input.value);
  h1.textContent = `Tally ${numOfClicks}`;
});

subBtn.addEventListener("click", function (event) {
  numOfClicks -= parseInt(input.value);
  h1.textContent = `Tally ${numOfClicks}`;
});