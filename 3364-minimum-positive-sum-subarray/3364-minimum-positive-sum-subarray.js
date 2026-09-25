/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let result = Number.MAX_SAFE_INTEGER;

    for(let i=0;i<nums.length;i++){
        let sum = 0;

        for(let j=i;j<nums.length;j++){
            sum += nums[j];

            let length = j-i+1;

            if(length >= l && length <= r && sum > 0){
                result = Math.min(result, sum);
            }
        }
    }

    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};