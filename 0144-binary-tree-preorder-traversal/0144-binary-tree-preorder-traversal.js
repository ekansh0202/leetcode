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
    // Preorder = root -> left -> right
    // Recursive approach

    let result = [];

    function traversal(currentNode){
        //Base case
        if(!currentNode) return;

        // Push root
        result.push(currentNode.val);

        // Go to left sub tree
        traversal(currentNode.left);

        // Go to right sub tree
        traversal(currentNode.right);
    }

    traversal(root);
    return result;
};