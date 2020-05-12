/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  let current = 0
  let currentHeight = 0
  for (let i = 0, len = height.length; i < len; i++) {
    for (let j = 0; j < i; j++) {
      currentHeight = Math.min(height[i], height[j])
      current = currentHeight * (i - j)
      max = current > max ? current : max
    }
  }
  return max
}
// @lc code=end
