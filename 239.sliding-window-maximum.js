/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let stack = []
  let stackIndex = []
  let result = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (stackIndex[0] <= i - k) {
      // 窗口左侧元素，超出界限后删除
      stack.shift()
      stackIndex.shift()
    }

    // 删除窗口中小于新增的
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      stack.pop()
      stackIndex.pop()
    }

    // 窗口右滑
    stackIndex.push(i)
    stack.push(nums[i])

    // 窗口（宽度）成型
    if (i >= k - 1) {
      result.push(stack[0])
    }
  }

  return result
}
// @lc code=end
