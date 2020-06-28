/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let stack = []
  let stackIndex = []
  let sum = 0
  for (let i = 0, len = height.length; i < len; i++) {
    // 删除窗口中小于新增的
    while (stack.length > 0 && stack[stack.length - 1] < height[i]) {
      let current = height[i]
      if (stack[0] > height[i]) {
        sum += (height[i] - stack[stack.length - 1]) * (i - stackIndex[stackIndex.length - 1])
      } else if (stack[0] - stack[stack.length - 1] > 0) {
        sum += (stack[0] - stack[stack.length - 1]) * (i - stackIndex[stackIndex.length - 1])
      }
      stack.pop()
      stackIndex.pop()
    }

    // 窗口右滑
    stackIndex.push(i)
    stack.push(height[i])
  }

  return sum
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// @lc code=end
