/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // We can use slow and fast pointer approach
    // If there is a cycle then at one point fast and slow
    // will meet each other
    let slow = head, fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow) return true;
    }

    return false;
};