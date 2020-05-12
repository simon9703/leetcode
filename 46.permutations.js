/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let status = new Array(nums.length).fill(0)
  let result = []
  let current = []
  solve(current, result, nums, status)
  return result
}

function solve(current, result, nums, status) {
  if (current.length === nums.length) {
    result.push([...current])
    console.log('result:', current)
    return
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    if (status[i] === 1) continue
    current.push(nums[i])
    status[i] = 1
    solve(current, result, nums, status)
    current.pop()
    status[i] = 0
  }
}

// @lc code=end
