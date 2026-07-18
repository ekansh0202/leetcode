/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowSize = matrix.length;
    let columnSize = matrix[0].length;

    let row = 0, column = columnSize - 1;

    while(row < rowSize && columnSize >= 0){
        if(matrix[row][column] === target){
            return true;
        }
        else if(matrix[row][column] > target){
            column--;
        }
        else{
            row++;
        }
    }

    return false;
};