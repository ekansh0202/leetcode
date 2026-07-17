/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let size = nums.length;

    nums.sort((a,b) => a - b);

    let l = 0, r = size;

    while(l < r){
        let m = l + Math.floor((r-l) / 2);

        if(nums[m] > m){
            r = m;
        }
        else if(nums[m] <= m){
            l = m + 1;
        }
    }

    return l;
};