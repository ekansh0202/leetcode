/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // brute force can be of using two for loops - O(n^2)
    // second one can be of using map - extra space
    // third we can use two pointers

    nums.sort((a,b) => a - b);

    let j=0;

    for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[j]) return nums[i];

        else j++;
    }
};