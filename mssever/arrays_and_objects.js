// Exercise 1

const numbers = [2, 22, 12, 17, 18, 39, 129, 42];
function arraySum(nums) {
  let out = 0;
  nums.forEach(num => {
    out += num;
  });
  return out;
}

console.log(`The sum of ${numbers} is ${arraySum(numbers)}.`);

// Exercise 2

const book = {}
book.title = 'Some Title';
book.author = 'Some Author';
book.pages = 42;
book.has_been_read = false;
book.times_read = 0;
book.info = function () {
  return `<i>${this.title}</i> by ${this.author} has been read ${this.times_read} time(s).`
}

console.log(book.info());
console.log(book)
