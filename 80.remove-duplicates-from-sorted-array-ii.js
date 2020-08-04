/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let before = undefined
  let before2 = undefined // 保留前两个值
  let current = 0
  let count = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i === 0) {
      before = nums[i]
      count++
      nums[current++] = nums[i]
      continue
    }

    if (nums[i] !== before) {
      // 第一次出现
      before = nums[i]
      before2 = undefined
      count++
      before = nums[i]
      nums[current++] = nums[i]
    } else if (before2 === undefined) {
      // 第二次出现
      before2 = before
      count++
      before = nums[i]
      nums[current++] = nums[i]
    } else {
      // 第三次出现
      continue
    }
  }

  return count
}

// @lc code=end
