/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head;
    let previous = null;

    // If head to be deleted
    while (current !== null && current.val === val) {
        current = current.next;
    }

    head = current;

    while(current !== null){
        if(current.val === val){
            let nextNode = current.next;
            previous.next = nextNode;
            current = nextNode;
        }
        else{
            previous = current;
            current = current.next;
        }
    }

    return head;
};