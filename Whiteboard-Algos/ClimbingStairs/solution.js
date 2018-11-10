function naiveClimbStairs(n) {
  // base case 1
  if (n < 0) return 0;
  // base case 2
  else if (n == 0) return 1;
  // move towards our base case
  else {
    return naiveClimbStairs(n - 1) + naiveClimbStairs(n - 2) + naiveClimbStairs(n - 3);
  }
}

climbStairs(3);