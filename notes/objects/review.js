var seasons = ["Spring", "Summer", "Fall", "Winter"];

function printN(value) {
  console.log(value.toUpperCase());
}

// Print each season to the console after converting the letters to uppercase
seasons.forEach(printN);

let jacket1 = {
  color: "blue",
  season: "Spring",
  size: "M",
  current: true,
  price: 19.99
};
let jacket2 = {
  color: "black",
  season: "Winter",
  size: "L",
  current: true,
  price: 79.99
};
let jacket3 = {
  color: "tan",
  season: "Summer",
  size: "XXL",
  current: false,
  price: 69.99
};
let jacket4 = {
  color: "red",
  season: "Summer",
  size: "M",
  current: false,
  price: 39.99
};
let jacket5 = {
  color: "black",
  season: "Winter",
  size: "S",
  current: true,
  price: 599.99
};

const inventory = [];

inventory.push(jacket1, jacket2, jacket3, jacket4, jacket5);

console.log(inventory);

// Show jackets that are below $60
const updatedInventory = inventory.filter(function (value) {
  return value.price < 60
})

console.log(updatedInventory);
