/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // Root => Left => Right
    if(root === null) return [];

    let stack = [root];
    let result = [];

    while(stack.length > 0){
        let node = stack.pop();

        result.push(node.val);

        // Push right first
        if(node.right) stack.push(node.right);

        // Push left second
        if(node.left) stack.push(node.left);
    }

    return result;
};