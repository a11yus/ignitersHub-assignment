function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;

  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  // Initialize the base cases
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,  // Deletion
        dp[i][j - 1] + 1,  // Insertion
        dp[i - 1][j - 1] + cost  // Substitution
      );
    }
  }

  return dp[m][n];
}

module.exports = levenshtein;
