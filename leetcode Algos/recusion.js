 //   3
 //  / \
 //  9 20 
 //    /\
 //   15  7
// 111. Minimum Depth of Binary Tree
//  Given a binary tree, find its minimum depth.

//  The minimum depth is the number of 
//  nodes along the shortest path from the root node down to the nearest leaf node.

 //we realized the problem with this solution is that 
 // it doesn't solve the edge with a tree with one branch.
 // for the tree [1,2] we would automatically increment the left branch even though
 // the problem states down to the nearest leaf node
 
function minDepth(root) {
  if (!root) {
    return 0;
  };
  let lBranch = minDepth(root.left) + 1;
  let rBranch = minDepth(root.right) + 1;
  return Math.min(lBranch, rBranch) || Math.max(lBranch, rBranch);
}
