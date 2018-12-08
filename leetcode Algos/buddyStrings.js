// Given two strings A and B of lowercase letters,
//   return true
// if and only
// if we can swap two letters in A so that the result equals B.



// Example 1:

//   Input: A = "ab", B = "ba"
// Output: true
// Example 2:

//   Input: A = "ab", B = "ab"
// Output: false
// Example 3:

//   Input: A = "aa", B = "aa"
// Output: true
// Example 4:

//   Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

//   Input: A = "", B = "aa"
// Output: false



var buddyStrings = function (A, B) {
  if (A.length != B.length) {
    return false;
  }
  let [dif, chars] = [
    [], new Set(A)
  ];
  for (i in A) {
    if (A[i] != B[i]) {
      dif.push([A[i], B[i]]);
    }
  } // if we recognized a swap check for it/ else compare the lengths of the set and orginal length 
  // to indicate if both values were the same 
  return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};