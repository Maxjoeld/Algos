// Given a binary tree and a sum, find all root - to - leaf paths where each path 's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

//   Given the below binary tree and sum = 22,

//   5 /
//   \
//   4 8 /
//   / \
// 11 13 4
//   /
//   \/ \
// 7 2 5 1
// Return:

//   [
//     [5, 4, 11, 2],
//     [5, 8, 4, 5]
//   ]




const pathSum = function (root, sum) {
  return helper(root, sum, [], []);
};

function helper(root, sum, solution, result) {
  if (!root) { // sanity check
    return result;
  }

  solution.push(root.val); // add current node's value to the solution

  if (!root.left && !root.right && root.val === sum) {
    result.push(solution.slice()); // found a solution
  }

  helper(root.left, sum - root.val, solution, result); // try left subtree
  helper(root.right, sum - root.val, solution, result); // try right subtree

  solution.pop(); // backtracking

  return result;
};


var pathSum = function (root, sum) {
  var left,
    right,
    i;

  if (root === null) return [];
  if (sum === root.val && root.left === null && root.right === null) return [
    [root.val]
  ];

  left = pathSum(root.left, sum - root.val);
  right = pathSum(root.right, sum - root.val);

  for (i = 0; i < left.length; i++) {
    left[i].unshift(root.val);
  }
  for (i = 0; i < right.length; i++) {
    right[i].unshift(root.val);
  }
  return left.concat(right);
};


// Iteravtive solution
var pathSum = function (root, sum) {
  let result = [];

  if (!root) {
    return result;
  }

  // Init stack with root, array of its val, and sum of its root.val
  let stack = [root, [root.val], root.val];

  while (stack.length > 0) {

    // Extract currSum, currPath, currNode from stack
    let currSum = stack.pop();
    let currPath = stack.pop();
    let currNode = stack.pop();

    // If we're at a leaf and currSum equals sum
    if (!currNode.left && !currNode.right && currSum === sum) {
      result.push(currPath.slice());
    }

    if (currNode.left) {
      stack.push(currNode.left);
      stack.push(currPath.concat(currNode.left.val));
      stack.push(currSum + currNode.left.val);
    }

    if (currNode.right) {
      stack.push(currNode.right);
      stack.push(currPath.concat(currNode.right.val));
      stack.push(currSum + currNode.right.val);
    }
  }

  return result;
};