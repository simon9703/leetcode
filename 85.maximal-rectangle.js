/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let largest = 0

  // 分别计算每一行之上区域，的矩形高度。（转化为#84解）
  for (let i = 0, height = matrix.length; i < height; i++) {
    let heights = []
    let currentHeight = 0
    let current = 0

    // 计算此列上的矩形高度。
    for (let j = 0, len = matrix[i].length; j < len; j++) {
      currentHeight = 0
      current = i
      while (current >= 0 && matrix[current][j] === '1') {
        currentHeight++
        current--
      }
      heights.push(currentHeight)
    }
    largest = Math.max(largest, largestRectangleArea(heights))
  }
  return largest
}

// #84题解
var largestRectangleArea = function (heights) {
  let largestArea = 0
  let currentArea = 0
  let left, right

  // 找出每个坐标下，矩形的最大面积。
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
