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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // Level order traversal is a BFS - Queue data structure can be used

    if(!root) return [];

    let queue = [root];
    let result = [];
    let current;
    let levelSize = 0;
    let levelArray = [];

    while(queue.length){

        levelArray = [];
        levelSize = queue.length;

        for(let i=0;i<levelSize;i++){
            // Removing from front;
            current = queue.shift();

            // Processing each level
            levelArray.push(current?.val);

            // Push children of current element
            current?.left && queue.push(current.left);
            current?.right && queue.push(current.right);
        }
        result.push(levelArray);
    }

    return result;
};