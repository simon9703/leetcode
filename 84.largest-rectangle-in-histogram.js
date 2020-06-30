/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let largestArea = 0
  let currentArea = 0
  let left, right

  // 找出每个坐标下，以此矩形高度为准，的最大面积。
  for (let i = 0, len = heights.length; i < len; i++) {
    left = right = i
    while (left >= 0 && heights[left] >= heights[i]) {
      left--
    }
    while (right < len && heights[right] >= heights[i]) {
      right++
    }

    // 由于while循环，left比实际小1，right比实际大1。
    currentArea = heights[i] * (right - left - 1)
    largestArea = Math.max(currentArea, largestArea)
  }
  return largestArea
}
// @lc code=end
