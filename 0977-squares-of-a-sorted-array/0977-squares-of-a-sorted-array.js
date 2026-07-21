/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // using two pointer approach

    // Since the array is sorted, the element with the largest absolute value is always at one of the two ends, so we compare only the ends and build the answer from largest to smallest.

    let left = 0, right = nums.length - 1, index = nums.length - 1;
    let result = [];

    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            result[index] = nums[left] * nums[left];
            left++;
        }
        else{
            result[index] = nums[right] * nums[right];
            right--;
        }
        index--;
    }

    return result;
};