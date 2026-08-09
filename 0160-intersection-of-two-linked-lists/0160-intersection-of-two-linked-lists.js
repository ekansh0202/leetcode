/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
     let set = new Set();

     let current1 = headA;

     while(current1 !== null){
        set.add(current1);
        current1 = current1.next;
     }

     let current2 = headB;

     while(current2 !== null){
        if(set.has(current2)){
            return current2;
        }
        current2 = current2.next;
     }

     return null;
};