/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 1st approach is put all node values in a string/array and check if palindrome

    // 2nd approach can be to find the middle element
    // reverse list from middle to end
    // now we will have two pointers at start and end to check for palindrome
    // NOTE: we can find the middle node using slow and fast pointer approach

    let slow = head, fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    let current = slow;
    let previous = null;

    while(current !== null){
        let nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    // Now previous points to the last element of the reversed list from middle
    let start = head;
    let end = previous;

    while(end !== null){
        if(start.val !== end.val){
            return false;
        }

        start = start.next;
        end = end.next;
    }

    return true;
};