var number = 145;
var sum = 0;
var fact = 1;
var temp = number;
while (number != 0) {
  var num = Math.floor(number % 10);
  console.log(number);
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  sum = sum + fact;
  fact = 1;
  number = Math.floor(number / 10);
}
number = temp;

if (sum == number) {
  console.log("Strong Number");
}
