/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length - 1;

    while(l<=r){
        let m = l + Math.floor((r-l)/2);

        // if pair is on the left side
        if(nums[m] === nums[m-1]){
            let leftCount = m - 1 - l;

            if(leftCount % 2 === 1){
                // check if leftCount is odd
                r = m - 2;
            }
            else{
                // check if rightCount is even
                l = m + 1;
            }
        }
        // if pair is on the right side
        else if(nums[m] === nums[m+1]){ 
            let rightCount = r - m + 1;

            if(rightCount % 2 === 1){
                // check if rightCount is odd
                l = m + 2;
            }
            else{
                // check if rightCount is even
                r = m - 1;
            }
        }
        else{
            return nums[m];
        }
    }
};