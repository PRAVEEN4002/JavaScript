///peffect Number: sum of the factors of a number equal to the same number
let sum = 0;
let number = 6;
for (var i = 0; i < number; i++) {
  if (number % i === 0) {
    sum = sum + i;
  }
}
console.log(sum);
