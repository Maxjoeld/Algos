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
