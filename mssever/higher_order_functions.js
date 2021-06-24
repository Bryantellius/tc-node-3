
function plus(n) {
  return function (plusNumber) {
    return n + plusNumber;
  }
}

var plus15 = plus(15);
console.log(plus15(10))
