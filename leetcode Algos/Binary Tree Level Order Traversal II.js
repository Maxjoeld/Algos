var levelOrderBottom = function (root) {
  if (!root) return [];

  let queue = [root];
  const output = [];

  while (queue.length > 0) {
    const newQueue = [];
    const currentLevel = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }

      currentLevel.push(node.val);
    };

    output.unshift(currentLevel);
    queue = newQueue;
  }

  return output;
};