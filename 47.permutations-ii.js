/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let status = new Array(nums.length).fill(0)
  let result = []
  let current = []
  nums = nums.sort()
  solve(current, result, nums, status)
  return result
}

function solve(current, result, nums, status) {
  if (current.length === nums.length) {
    result.push([...current])
    // console.log('++result++:', JSON.stringify(current))
    return
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    if (status[i] === 1) continue
    if (i > 0 && status[i - 1] === 0 && nums[i] === nums[i - 1]) {
      continue
    }
    // console.log('status:', JSON.stringify(status), i, i > 0 && nums[i - 1] === 0 && nums[i] === nums[i - 1])
    current.push(nums[i])
    status[i] = 1
    solve(current, result, nums, status)
    current.pop()
    status[i] = 0
  }
}

// @lc code=end
