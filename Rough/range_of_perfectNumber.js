///printing the range of perfect numbers in the given range
var number = 8;
var array = [];
var sum = 0;
count = 0;
for (var i = 1; i < number; i++) {
  for (var j = 1; j < i; j++) {
    if (i % j == 0) {
      sum = sum + j;
    }
  }
  if (sum == i) {
    console.log("loop");
    array[count] = sum;
    count++;
  }
  sum = 0;
}
console.log(array);
