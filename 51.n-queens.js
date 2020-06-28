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
  let question = [] // 当前解
  let result = [] // 结果集
  findResult(0, n, question, result)
  return transformToQueens(n, result)
}

/**
 * 找出当前行，能符合的位置下标。
 * @param {*} total
 * @param {*} question
 */
function nextSafeLayer(total, question) {
  // 第一行位置都可用，返回[0,1...n-1]
  if (question.length === 0) {
    return new Array(total).fill(0).map((val, index) => index)
  }

  let len = question.length // 已有行数
  let x, y // 坐标
  let left, right
  let unsafes = new Map() // 不可用的x位置
  let safes = [] // 可用的x位置

  // 计算每个点，在第len行，不可用的x轴坐标。(左斜线、垂直线、右斜线，与y=len相交点)
  for (let i = 0; i < len; i++) {
    x = question[i]
    y = i

    unsafes.set(x, true) // 垂直线

    left = len - y + x // 斜对角线（左）
    if (left >= 0 && left <= total) {
      unsafes.set(left, true)
    }

    right = x + y - len // 斜对角线（右）
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

// 结果数组，转为题解格式。
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

/**
 * 回溯解
 * @param {*} current 当前位置
 * @param {*} total 总数
 * @param {*} question [n...] 每行皇后在n位
 * @param {*} result 保留结果
 */
function findResult(current, total, question, result) {
  // 满足条件时：
  if (current === total) {
    result.push(question.slice(0))
    return
  }

  let safes = nextSafeLayer(total, question)
  for (let i of safes) {
    // 回溯
    question.push(i)
    findResult(current + 1, total, question, result)
    question.pop()
  }
}

// @lc code=end
