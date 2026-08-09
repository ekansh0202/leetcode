/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {

    const set = new Set(nums);

    // Remove nodes from the beginning
    while (head !== null && set.has(head.val)) {
        head = head.next;
    }

    let current = head;
    let previous = null;

    while(current !== null){
        if(set.has(current.val)){
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