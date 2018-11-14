// #
// Product of All Other Numbers

// Write a
// function that receives an array of integers and returns an array of the products.

// For example, given
//   ``
// `
// [1, 7, 3, 4]
// `
// ``
// your
// function should
// return ``
// `
// [84, 12, 28, 21]
// `
// ``
// by calculating
//   ``
// `
// [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// `
// ``

// If your interviewee comes up with a solution that utilizes division, that 's fine. Once they get through that, challenge them to then come up with a solution that doesn'
// t utilize division!

//   Analyze the time and space complexity of your solution.
// Naive approach 
function productExceptMe(arr) {
  return arr.map((exceptNum, i) => {
    return arr.reduce((num, j, idx) => {
      if (i !== idx) {
        return num * j;
      }
      return num;
    })
  });
};

function productExceptMe(arr) {
  let hash = {};
  let product = 1;
  let target = arr[0];

  arr.forEach((num, i) => {
    if (i !== arr.indexOf(target)) {
      num * target;
    }
    if (hash[num]) {
      hash[num]
    }
  })
};

// [1, 7, 3, 4]
console.log(productExceptMe([1, 7, 3, 4]))