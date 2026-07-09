/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1;
    let result = Number.MAX_SAFE_INTEGER;

    while(l<=r){
        let m = l + Math.floor((r-l)/2);

        // if left half is sorted then minimum will be left
        // so we can find that minimum and discard that half since its sorted
        if(nums[l] <= nums[m]){
            // update min
            result = Math.min(result, nums[l]);
            // eliminate left half
            l = m + 1;
        }
        else{
            result = Math.min(result, nums[m]);
            // eliminate right half
            r = m - 1;
        }
    }

    return result;
};