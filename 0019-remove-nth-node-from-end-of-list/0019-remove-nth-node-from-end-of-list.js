/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Approach 1 - Find the length of the linked list and then delete the n'th item from end
    let length = 0;
    let current = head;

    while(current !== null){
        length++;
        current = current.next;
    }

    // Remove head
    if (n === length) {
        return head.next;
    }

    current = head;

    let count = 0;

    for(let i=0;i<length - n - 1;i++){
        current = current.next;
    }

    current.next = current.next.next;

    return head;
};