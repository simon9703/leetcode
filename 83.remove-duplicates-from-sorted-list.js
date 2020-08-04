/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
  let link = head
  while (link && link.next) {
    if (link.val !== link.next.val) {
      link = link.next
    } else {
      // 和当前值重复，则跳过
      link.next = link.next.next
    }
  }
  return head
}
// @lc code=end
