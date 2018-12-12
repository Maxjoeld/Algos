// 107. Binary Tree Level Order Traversal II
// Easy
// 552
// 97
// Favorite
// Share
// Given a binary tree,
// return the bottom - up level order traversal of its nodes ' values. (ie, from left to right, level by level from leaf to root).

// For example:
//   Given binary tree[3, 9, 20, null, null, 15, 7],
    //   3
    //  / \
    //  9 20 
    //    / \
    //   15  7
// return its bottom - up level order traversal as: [
//   [15, 7],
//   [9, 20],
//   [3]
// ]




// 111. Minimum Depth of Binary Tree
// Easy
// 562
// 272
// Favorite
// Share
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

//   Given binary tree[3, 9, 20, null, null, 15, 7],
    //   3
    //  / \
    //  9 20 
    //    /\
    //   15  7
// return its minimum depth = 2.



// 112. Path Sum
// Easy
// 683
// 218
// Favorite
// Share
// Given a binary tree and a sum, determine
// if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

//   Given the below binary tree and sum = 22,

//   5 
 // / \
// 4   8 
//   /   / \
//  11   13 4
// /  \      \
// 7   2     1
// return true, as there exist a root - to - leaf path 5 - > 4 - > 11 - > 2 which sum is 22.




// 110. Balanced Binary Tree
// Easy
// 882
// 75
// Favorite
// Share
// Given a binary tree, determine
// if it is height - balanced.

// For this problem, a height - balanced binary tree is defined as:

//   a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:

//   Given the following tree[3, 9, 20, null, null, 15, 7]:

//   3 /
//   \
//   9 20 /
//   \
//   15 7
// Return true.

// Example 2:

//   Given the following tree[1, 2, 2, 3, 3, null, null, 4, 4]:

//   1 /
//   \
//   2 2 /
//   \
//   3 3 /
//   \
//   4 4


// 112. Path Sum
// Easy
// 683
// 218
// Favorite
// Share
// Given a binary tree and a sum, determine
// if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

//   Given the below binary tree and sum = 22,

//   5 /
//   \
//   4 8 /
//   / \
// 11 13 4
//   /
//   \\
//   7 2 1
// return true, as there exist a root - to - leaf path 5 - > 4 - > 11 - > 2 which sum is 22.
var hasPathSum = function (root, sum) {
  if (!root) return false;
  // we must explicitly check the tree for leaves
  // the edge case hasPathSum([1,2], 1), would imagine to be true since 
  // 1-1 ===0 but the answer must be al eaf and not the head of a tree 
  if (!root.left && !root.right && sum - root.val === 0) { // check leaf
    return true;
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};




// 107. Binary Tree Level Order Traversal II
// Easy
// 552
// 97
// Favorite
// Share
// Given a binary tree,
// return the bottom - up level order traversal of its nodes ' values. (ie, from left to right, level by level from leaf to root).

// For example:
//   Given binary tree[3, 9, 20, null, null, 15, 7],
//   3 /
//   \
//   9 20 /
//   \
//   15 7
// return its bottom - up level order traversal as: [
//   [15, 7],
//   [9, 20],
//   [3]
// ]







let val = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}