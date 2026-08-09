/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current3 = dummy;

    let current1 = list1;
    let current2 = list2;

    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            current3.next = current1;
            current1 = current1.next;
        } else {
            current3.next = current2;
            current2 = current2.next;
        }

        current3 = current3.next;
    }

    if (current1 !== null) {
        current3.next = current1;
    }

    if (current2 !== null) {
        current3.next = current2;
    }

    return dummy.next;
};