/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // one approach can be of using extra space

    // 2nd approach is using two pointers

    let j=0;

    for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[j]){
            continue;
        }
        else{
            j++;
            nums[j] = nums[i];
        }
    }

    return j+1;

};