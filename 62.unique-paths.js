/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let result = new Array(m)
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n).fill(0)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        result[i][j] = 1
      } else {
        result[i][j] = result[i - 1][j] + result[i][j - 1]
      }
    }
  }
  return result[m - 1][n - 1]
}

// @lc code=end
