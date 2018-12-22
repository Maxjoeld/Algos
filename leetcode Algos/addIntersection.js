// var intersection = function(nums1, nums2) {
//     const set = new Set(nums1);
//     return [...new Set(nums2.filter(n => set.has(n)))];
// };

var intersection = function(nums1, nums2) {
  let first = nums1.filter((ele) => nums2.includes(ele)) // First find the subset of num1 & num2 (with duplicate)
return first.filter((ele, index) => first.indexOf(ele) === index); // Then deduplicate the subset by only keeping the first element appears
};

// function intersection(nums1, nums2) {
//     let noDups = nums1.reduce((obj, ele) => { 
//         if (!obj[ele]) obj[ele] = 1;
//         return obj;
//     },{});
  
//     const keysNum1 = Object.keys(noDups);
//     return keysNum1.reduce((arr, ele) => {
//         if (nums2.includes(Number(ele))) arr.push(Number(ele));
//         return arr;
//     },[]);
// }


// intersection two 
var intersect = function(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
     if (nums2.indexOf(nums1[i]) > -1) {
         result.push(nums1[i]);
         nums2.splice(nums2.indexOf(nums1[i]), 1)
     }
  };
  return result;
};

// Q. What if the given array is already sorted? How would you optimize your algorithm?

// If both arrays are sorted, I would use two pointers to iterate, which somehow resembles the merge process in merge sort.

// Q. What if nums1's size is small compared to nums2's size? Which algorithm is better?

// Suppose lengths of two arrays are N and M, the time complexity of my solution is O(N+M) and the space complexity if O(N) considering the hash. So it's better to use the smaller array to construct the counter hash.

// Well, as we are calculating the intersection of two arrays, the order of array doesn't matter. We are totally free to swap to arrays.

// Q. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// Divide and conquer. Repeat the process frequently: Slice nums2 to fit into memory, process (calculate intersections), and write partial results to memory.
// Store the two strings in distributed system(whether self designed or not), then using MapReduce technique to solve the problem;




// Q. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// Processing the Strings by chunk, which fits the memory, then deal with each chunk of data at a time;

// Processing the Strings by streaming, then check.