// #
// Merging Two Packages

// Given a package with a weight limit `limit`
// and an array `arr` of item weights, implement a
// function `getIndicesOfItemWeights`
// that finds two items whose sum of weights equals the weight limit limit.Your
// function should
// return a pair `[i, j]` of the indices of the item weights, ordered such that `i > j`.
// If such a pair doesn’ t exist,
//   return an empty array.

// Analyze the time and space complexities of your solution.

// Example:
//   ``
// `
// input: arr = [4, 6, 10, 15, 16]
//        limit = 21
// output: [3, 1]   // since these are the indices of 
//                  // weights 6 and 15 whose sum equals 21
// `
// ``
// naive solution
// function mergePackages(arr, limit) {
//   for (let i = 0; i < arr.length; i++) {
//     let outterArr = arr[i];
    
//     for (let j = 0; j < arr.length; j++) {
//       let num = arr[j];
//       if (i !== j) {
//         if ((outterArr + num) === limit) {
//           return i > j ? [i, j] : [j, i];
//         }
//       }
//     }
//   }
//   return [];
// }

function mergePackages(arr, limit) {
  // const result = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let match = arr.indexOf(limit - num);
    if (match > -1) {
      if (arr[match] + num === limit) {
        return [i, match];
      }
    }
  }
  return [];
}

const arr = [4, 6, 10, 15, 16]
      //  limit = 21
const limit = 21;   // since these are the indices of 
//                  // weights 6 and 15 whose sum equals 21

console.log(mergePackages(arr, limit))