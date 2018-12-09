/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// maxDepth({
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null
//     }
//   }
// })
var maxDepth = function(root) {
  if (root === null) {
      return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// 3, 9, 20, null, null, 15, 7
function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  let cur = {};
  let count = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = size; i > 0; i--) {
      cur = queue.shift();
      // if the nodes arent null add them to the queue 
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    count++;
  }
  return count;
}

var maxDepth = function (root) {
  let max = 0;
  const dfs = (node = root, depth = max) => {
    if (node === null) {
      max = Math.max(max, depth);
      return;
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs();
  return max;
};

// maxDepth({
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null
//     }
//   }
// })