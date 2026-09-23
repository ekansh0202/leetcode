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
 * @return {boolean}
 */
var isBalanced = function(root) {

    let ans = true;
    
    let calculate = (currentNode) => {
        if(!currentNode) return 0;

        // call for left sub tree
        let leftHeight = calculate(currentNode.left);

        // call for right sub tree
        let rightHeight = calculate(currentNode.right);

        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    };

    calculate(root);
    return ans;
};