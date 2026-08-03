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
var middleNode = function(head) {
    // we can use slow and fast pointer approach
    let slow = head, fast = head;

    // We move 'fast' by 2 nodes (fast.next.next), so BOTH fast and fast.next
    // must exist. Using || is unsafe because the loop may run when fast.next
    // is null, causing fast.next.next to throw an error.

    while(fast !== null && fast.next !== null){
        slow = slow?.next;
        fast = fast?.next?.next;
    }

    return slow;
};