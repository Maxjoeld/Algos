function largestContiguousSum(arr) {
  let highest = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];   
    if (sum > highest) {
      highest = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return highest;
}


const arr = [2, 3, -8, -1, 2, 4, -2, 3];
console.log(largestContiguousSum(arr)); // should print 7