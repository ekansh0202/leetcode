/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i=0,j=0,k=nums.length - 1;

    while(j<=k){
        if(nums[j] === 0){
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j++;
        }
        else if(nums[j] === 2){
            let temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp;
            k--;
        }
        else{
            j++;
        }
    }
};