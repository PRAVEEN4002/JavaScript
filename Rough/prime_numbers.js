var number = 7;
var count = 0;
for (var i = 0; i < number; i++) {
  if (number % i == 0) {
    count++;
  }
}

if (count > 1) {
  console.log("it is not a prime number");
} else {
  console.log("prime number");
}
