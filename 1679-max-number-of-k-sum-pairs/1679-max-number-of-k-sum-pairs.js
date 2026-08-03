/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b);

    let left = 0, right = nums.length - 1;
    let count = 0;

    while(left < right){
        if(nums.length === 0) return;

        if(nums[left] + nums[right] === k){
            left++;
            right--;
            count++;
        }
        else if(nums[left] + nums[right] < k){
            left++;
        }
        else if(nums[left] + nums[right] > k){
            right--;
        }
    }

    return count;
};