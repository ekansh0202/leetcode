/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    // using extra spaces
    let positive = [];
    let negative = [];
    let result = [];

    positive = nums.filter((num) => num >= 0);
    negative = nums.filter((num) => num < 0);
    
    let i = 0, j = 0, k=0;

    while(i<positive.length && j<negative.length){
        nums[k++] = positive[i];
        nums[k++] = negative[j];
        i++;
        j++;
    }

    return nums;
};