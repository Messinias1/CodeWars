function climbStairs(n) {
  if (n === 1) {
    return 1;
  }

  // Initialize the base cases
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  // Fill the dp array
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // The answer is the number of ways to reach the nth step
  return dp[n];
}
