var isSymmetric = function (root) {
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right || root.left.val !== root.right.val) {
    return false;
  }
  return isSymmetric(root.left, root.right) && isSymmetric(root.right, root.left)
};

// isSymmetric only works when calling a function with two params 
// which is why we must use another function to call both 
// and why the above solution is obvs wrong 


var isSymmetric = function (root) {
  if (!root) return true;
  const symmetry = (l, r) => {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) {
      return false;
    };
    let lBranch = symmetry(l.left, r.right);
    let rBranch = symmetry(l.right, r.left);
    return lBranch && rBranch;
  };
  return symmetry(root.left, root.right)
};


