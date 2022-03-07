function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let x = min
  let newArr = [];
  while (x <= max) {
    newArr.push(x);
    x++;
  }
  let sum = newArr.reduce((sum, curr) => sum + curr);
  return sum;
}
