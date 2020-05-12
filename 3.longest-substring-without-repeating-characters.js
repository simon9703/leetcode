/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let str = s.split('')
  let len = str.length
  let child = []
  let current = ''
  for (let i = 0; i < len; i++) {
    current = str[i]
    while (child.indexOf(current) > -1) {
      child.shift()
    }
    child.push(current)
    max = max < child.length ? child.length : max
  }

  return max
}
// @lc code=end
