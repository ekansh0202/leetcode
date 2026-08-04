/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i = 0, j = nums.length - 1;

    while(i < j){
        if(nums[i] % 2 === 1){
            if(nums[j] % 2 === 0){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j--;
            }
            else{
                j--;
            }
        }
        else if(nums[j] % 2 === 0){
            if(nums[i] % 2 === 1){
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
                i++;
                j--;
            }
            else{
                i++;
            }
        }
        else{
            i++;
            j--;
        }
    }

    return nums;
};