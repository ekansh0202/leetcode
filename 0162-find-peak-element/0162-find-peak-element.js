/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r){
        let m = l + Math.floor((r-l) / 2);

        if(nums[m] < nums[m+1]){
            // peak is on the right side
            l = m+1;
        }
        else if(nums[m] > nums[m+1]){
            // peak is either the element or it can be 
            // on the left side
            r = m;
        }
    }

    return r;
};