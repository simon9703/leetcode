/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let next, nextt, current, link
  link = current = {
    next: head
  }

  // 往后遍历两个值，作判断
  while (current && (next = current.next)) {
    nextt = next.next

    // 第二个和第一个不相等
    if (!nextt || nextt.val != next.val) {
      current = current.next
    } else {
      // 第二个和第一个不相等，全部跳过
      while (nextt && next.val === nextt.val) {
        nextt = nextt.next
      }
      current.next = nextt
    }
  }
  return link.next
}

// @lc code=end
