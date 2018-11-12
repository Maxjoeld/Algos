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

}


const inputMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

console.log(flattenInputMatrix(inputMatrix));