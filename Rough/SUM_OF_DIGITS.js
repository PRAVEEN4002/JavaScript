let number = 9878;
let sum = 0;
while (number != 0) {
  sum = sum + Math.floor(number % 10);
  number = number / 10;
}
console.log(sum);
