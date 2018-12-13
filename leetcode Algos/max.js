function maxDepth(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

function maxDepth (root) {
  let max = 0;
  const dfs = (node = root, depth = max) => {
    if (!node) {
      max = Math.max(max, depth);
      return
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs();
  return max;
 }