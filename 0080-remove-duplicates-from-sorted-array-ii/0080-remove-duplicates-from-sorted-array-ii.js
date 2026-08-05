/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;

    let j = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

// Pattern to remember
// For a sorted array where each value can appear at most K times:
// let write = K;

// for (let read = K; read < nums.length; read++) {
//     if (nums[read] !== nums[write - K]) {
//         nums[write] = nums[read];
//         write++;
//     }
// }