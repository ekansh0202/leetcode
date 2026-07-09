/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b) => a - b);

    let l = 0, r = nums.length - 1;
    let count = 0;

    while(l < r){
        let sum = nums[l] + nums[r];

        if(sum < target){
            count += r - l;
            l++;
        }
        else{
            r--;
        }
    }
    return count;
};