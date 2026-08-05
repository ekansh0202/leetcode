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
var deleteMiddle = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    if(head.next === null){
        return null;
    }

    // Find middle
    while(fast !== null && fast.next !== null){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Now slow points to middle and prev points to element next to middle
    prev.next = slow.next;

    return head;
};