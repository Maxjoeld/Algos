var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  let noDups = new Set(A);
  let swap = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      swap.push([A[i], B[i]]);
    }
  };
  // There are multiple edge cases to consider in this problem
  // One is what if there's multiple swaps in a string ? 
  // Three edge cases ! which is why we explicitly check for the lengths in the first- second or condition
  return swap.length === 2 && swap[0].reverse().join('') === swap[1].join('') || (swap.length === 0 && noDups.size !== A.length);
};