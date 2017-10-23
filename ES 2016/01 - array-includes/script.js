const array = [1, 4, 6];

console.log(array.includes(4));
console.log(array.includes(10));

Array.prototype.isInArray = function (value) {
  return this.indexOf(value) >= 0;
}

console.log(array.isInArray(4));
console.log(array.isInArray(10));

console.log([NaN].includes(NaN));
console.log([NaN].isInArray(NaN));