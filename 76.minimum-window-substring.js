/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let ttr = t.split('')
  let table = new Map()
  let tableCount = {}
  for (let i = 0, len = ttr.length; i < len; i++) {
    table.set(ttr[i], 0)
    if (!tableCount[ttr[i]]) {
      tableCount[ttr[i]] = 1
    } else {
      tableCount[ttr[i]] = tableCount[ttr[i]] + 1
    }
  }

  let str = s.split('')
  let count = 0
  let need = ttr.length
  let child = []
  let result = []
  for (let i = 0, len = str.length; i < len; i++) {
    child.push(str[i])
    if (t.indexOf(str[i]) > -1) {
      current = table.get(str[i])
      if (current < tableCount[str[i]]) {
        count++
      }
      table.set(str[i], ++current)
    }

    if (count === need) {
      if (result.length == 0 || child.length < result.length) result = [...child]
    }

    while (count === need) {
      let start = child.shift()
      if (t.indexOf(start) > -1) {
        current = table.get(start)
        table.set(start, --current)

        if (current < tableCount[start]) {
          count--
        }
      }

      if (count === need && child.length < result.length) {
        result = [...child]
      }
    }
  }

  return result.length > 0 ? result.join('') : ''
}

console.log(minWindow('AAB', 'AAB'))
// @lc code=end
