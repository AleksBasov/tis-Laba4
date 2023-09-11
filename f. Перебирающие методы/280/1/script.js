let numbers = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

numbers.forEach(function(number) {
  sumOfSquares += number * number;
});

console.log(sumOfSquares);