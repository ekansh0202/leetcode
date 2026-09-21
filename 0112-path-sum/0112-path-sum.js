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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Top Down approach
    if(!root) return false;
    let ans = false;

    let traversal = (root, currSum) => {
        if(!root.left && !root.right){
            if((currSum + root.val) === targetSum) ans = ans || true;
        }

        // go to left
        root.left && traversal(root.left, currSum + root.val);

        // go to right
        root.right && traversal(root.right, currSum + root.val);
    };

    traversal(root, 0);

    return ans;
};