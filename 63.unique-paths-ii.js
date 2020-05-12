/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  return uniquePaths(m, n, obstacleGrid)
}

var uniquePaths = function (m, n, obstacleGrid) {
  let result = new Array(m)
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n).fill(0)
  }
  let preLeft = 0,
    preTop = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        result[i][j] = 0
        continue
      }

      if (i === 0 && j === 0) {
        result[0][0] = 1
        continue
      }
      preLeft = i - 1 >= 0 ? result[i - 1][j] : 0
      preTop = j - 1 >= 0 ? result[i][j - 1] : 0
      result[i][j] = preLeft + preTop
    }
  }
  return result[m - 1][n - 1]
}

// @lc code=end
