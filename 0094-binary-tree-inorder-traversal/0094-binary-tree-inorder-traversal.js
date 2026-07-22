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
var inorderTraversal = function(root) {
    // inorder - Left => Root => Right
    let stack = [];
    let result = [];

    while(root !== null || stack.length !==0){

        // Go as far left as possible, pushing each node
        while(root !== null){
            stack.push(root);
            root = root.left;
        }

        // Left subtree is done, so visit the current node
        root = stack.pop();
        result.push(root.val);

        // Now traverse the right subtree
        root = root.right;
    }

    return result;
};