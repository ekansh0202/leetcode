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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Call for left subtree
    invertTree(root.left);

    // Call for right subtree
    invertTree(root.right);

    return root;
};