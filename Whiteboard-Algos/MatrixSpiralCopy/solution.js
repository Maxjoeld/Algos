// function flattenInputMatrix(matrix) {
//   let flatten = [[]];
//   for (let i = 0; i < matrix.length -1; i+=2) {
//     let arrNums = matrix[i];
//     let nextArrNums = matrix[i + 1];
//     const mergedArrs = arrNums.concat(nextArrNums);
//     flatten[0].push(...mergedArrs);
//   }
//   return flatten[0];
// }

function flattenInputMatrix(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let outterArr = matrix[i];
    let row = [];
    for (let j = 0; j < outterArr.length; j++) {
      let nums = outterArr[j];
      if (i === 0) {
        result.push(...matrix[0]);
      }
    }
  }
}


const inputMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]


console.log(flattenInputMatrix(inputMatrix));