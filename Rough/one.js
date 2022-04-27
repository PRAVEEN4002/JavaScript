let number = 4545;
console.log(number.toString().split("").reverse().join("") == number);
let reverse = 0;
let temp = number;
while (temp != 0) {
  reverse = reverse * 10 + (temp % 10);
  console.log(temp);
  temp = Math.floor(temp / 10);
}
console.log(reverse === temp);
