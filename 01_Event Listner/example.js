arr = [1, 2, 2, 2, 3, 5, 6, 9];
n = arr.length - 1;
s = 2;
function binarySearch(arr) {
  let start = 0;
  let end = n;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === s) {
      return middle;
    } else if (s > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
