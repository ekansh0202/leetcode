/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let result = [];

    for(let i=nums.length - k; i < nums.length; i++){
        result.push(nums[i]);
    }

    for(let i=0;i<nums.length - k; i++){
        result.push(nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};