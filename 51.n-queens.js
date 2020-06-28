/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // let arr = new Array(n).fill(new Array(n).fill(0))
  let question = []
  let result = []
  findResult(0, n, question, result)
  return transformToQueens(n, result)
}

function nextSafeLayer(total, question) {
  if (question.length === 0) {
    return new Array(total).fill(0).map((val, index) => index)
  }

  let len = question.length
  let left, right
  let x, y
  let unsafes = new Map()
  let safes = []
  for (let i = 0; i < len; i++) {
    x = question[i]
    y = i
    left = len - y + x // 邪对角线（左）
    right = x + y - len // 邪对角线（右）

    unsafes.set(x, true)
    if (left >= 0 && left <= total) {
      unsafes.set(left, true)
    }
    if (right >= 0 && right <= total) {
      unsafes.set(right, true)
    }
  }

  for (let j = 0; j < total; j++) {
    if (unsafes.get(j)) continue
    safes.push(j)
  }
  return safes
}

function transformToQueens(total, arr) {
  let queens = []
  for (let item of arr) {
    let que = []
    for (let position of item) {
      let strs = new Array(total).fill('.')
      strs[position] = 'Q'
      strs = strs.join('')
      que.push(strs)
    }
    queens.push(que)
  }
  return queens
}

function findResult(current, total, question, result) {
  // let len = current.length
  if (current === total) {
    result.push(question.slice(0))
    return
  }
  let safes = nextSafeLayer(total, question)
  for (let i of safes) {
    question.push(i)
    findResult(current + 1, total, question, result)
    question.pop()
  }
}

// console.log(solveNQueens(4))

// @lc code=end
