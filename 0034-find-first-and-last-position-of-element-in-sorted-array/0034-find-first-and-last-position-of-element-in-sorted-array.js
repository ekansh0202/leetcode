/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Here we can use 2 binary search
    // 1st to find the starting point
    // 2nd to find the ending point

    let result = [-1, -1];
    let l = 0, r = nums.length - 1;
    while(l < r){
        let m = l + Math.floor((r-l) / 2);

        if(nums[m] < target){
            l = m+1;
        }
        else{
            r = m;
        }
    }
    if(nums[l] === target){
        result[0] = l;
    }

    l = 0,
    r = nums.length - 1;

    while(l < r){
        let m = l + Math.ceil((r-l) / 2);

        if(nums[m] > target){
            r = m-1;
        }
        else{
            l = m;
        }
    }
    if(nums[r] === target){
        result[1] = r;
    }

    return result;
};