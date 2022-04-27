var number = 370;
var sum = 0;
var temp = number;
while (number != 0) {
  var num = Math.floor(number % 10);
  sum = sum + Math.pow(num, 3);
  number = Math.floor(number / 10);
}
if (temp == sum) {
  console.log("ArmStrong Number");
}
