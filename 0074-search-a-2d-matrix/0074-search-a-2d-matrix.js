/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // let rows = matrix.length;
    // let cols = matrix[0].length;

    // for(let i=0;i<rows;i++){
    //     // check if the target exists in that row
    //     if(matrix[i][0] <= target && target <= matrix[i][cols-1]){
    //         // search using binary search
    //         let row = matrix[i];

    //         let l = 0, r = cols - 1;

    //         while(l <= r){
    //             let m = l + Math.floor((r-l) / 2);

    //             if(row[m] === target){
    //                 return true;
    //             }
    //             else if(target < row[m]){
    //                 r = m - 1;
    //             }
    //             else{
    //                 l = m + 1;
    //             }
    //         }
    //     }
    // }
    // return false;



    // Optimised version
    // To binary search the rows first, then binary search within the selected row.

    let top = 0;
    let bottom = matrix.length - 1;
    let row = -1;

    while(top <= bottom){
        let m = top + Math.floor((bottom - top) / 2);
        
        // Compare the 1st element of the middle row
        if(target < matrix[m][0]){
            // correct row is behind the middle row
            bottom = m - 1;
        }
        // Compare the last element of the middle row
        else if(target > matrix[m][matrix[0].length - 1]){
            top = m + 1;
        }
        else{
            // Found the correct row
            row = m;
            break;
        }
    }

     if (row === -1) return false;

    // Now do binary search in this correct row
    let l = 0, r = matrix[row].length - 1;

    while(l <= r){
        let m = l + Math.floor((r-l) / 2);

        if(matrix[row][m] === target){
            return true;
        }
        else if(matrix[row][m] < target){
            l = m + 1;
        }
        else{
            r = m - 1;
        }
    }

    return false;
};