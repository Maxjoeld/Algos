// function integerPairs(nums, target) {
//   let result = [];
//   let usedNumbers = '1';
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     let sets = [];
//     for (let j = 0; j < nums.length; j++) {
//       let outterNum = nums[j];
//       if (usedNumbers.includes(outterNum)) continue;
//       if (num + outterNum === target) {
//         result.push([outterNum, num]);
//         usedNumbers += num;
//       }
//     }
//   }
//   return result.reverse();
// }

function integerPairs(arr, target) {
  let hash = {};
  let result = [];
  arr.forEach((num, i) => {
    if (hash[target - num]) {
      result.push([num, target - num]);
    } else {
      hash[num] = i + 1;
    }
  });
  return result;
}

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
