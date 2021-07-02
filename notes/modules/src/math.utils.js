function sum(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

function avg(...nums) {
  return sum(nums) / nums.length;
}

function salesTax(subtotal, tax) {
  let tax_total = subtotal * tax;
  return (subtotal + tax_total).toFixed(2);
}

export default {
  sum,
  avg,
  salesTax,
};
