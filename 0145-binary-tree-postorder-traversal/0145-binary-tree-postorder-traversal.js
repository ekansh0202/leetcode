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
var postorderTraversal = function(root) {
    // Recursive approach
    // Postorder = left -> right -> root

    let result = [];
    function traversal(currentNode){
        // Base case
        if(!currentNode) return;
        // Traverse left
        traversal(currentNode.left);

        // Traverse right
        traversal(currentNode.right);

        // Push root
        result.push(currentNode.val);
    }

    traversal(root);
    return result;
};