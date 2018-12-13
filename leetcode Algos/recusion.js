 //   3
 //  / \
 //  9 20 
 //    /\
 //   15  7

function minDepth(root) {
  if (!root) {
    return 0;
  };
  let lBranch = minDepth(9) + 1;
  let rBranch = minDepth(20) + 1;
  return Math.min(lBranch, rBranch) || Math.max(lBranch, rBranch);
}
// 9-null-null
function minDepth(root) {
  if (!root) {
    return 0;
  };
  let lBranch = minDepth(null) + 1; // returns 0 
  let rBranch = minDepth(null) + 1; // returns 0
  return Math.min(lBranch, rBranch) || Math.max(lBranch, rBranch);
}
// first null of nine- second null is the same thing  
function minDepth(root) {
  if (!root) {
    return 0
  }
  let lBranch = minDepth(root.left) + 1 //
  let rBranch = minDepth(root.right) + 1
  return Math.min(lBranch, rBranch) || Math.max(lBranch, rBranch)
}