/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let before = undefined // 上一个值
  let current = 0 // 数组原地存储时，保留其长度
  let count = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    // 首个值跳过
    if (i === 0) {
      before = nums[i]
      count++
      nums[current++] = nums[i]
      continue
    }

    if (nums[i] === before) {
      continue
    } else {
      count++
      before = nums[i]
      nums[current++] = nums[i] // 数组真实保留值
    }
  }

  return count
}

// @lc code=end
