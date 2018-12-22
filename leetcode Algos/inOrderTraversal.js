// var inorderTraversal = function(root) {
//     if (!root) return []
//     return helper(root, [])
    
//     function helper(root, result) {
//         // checks for no left node
//         if (!root) {
//             return undefined;
//         }
//         //check for leaves 
//         if (!root.left && !root.right) {
//             result.push(root.val);
//             return result;
//         }
//         let left = helper(root.left, result);
//         left === undefined || Array.isArray(left) ? result.push(root.val) : null;
//         let right = helper(root.right, result);
//         return result;
//     }
// };

var inorderTraversal = function(root, arr = []) {
  if (root) {    
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};