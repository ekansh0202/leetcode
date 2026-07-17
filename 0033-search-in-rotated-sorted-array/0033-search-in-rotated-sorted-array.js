/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // 1. Always check middle first
        if (nums[m] === target) {
            return m;
        }

        // 2. KEY IDEA: One half is always sorted in rotated array

        // 3. Check if LEFT half is sorted
        // Condition: nums[l] <= nums[m]
        if (nums[l] <= nums[m]) {

            // 4. If target lies inside sorted LEFT half range
            // then search left half, else go right
            if (nums[l] <= target && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        // 5. Else RIGHT half must be sorted
        else {

            // 6. If target lies inside sorted RIGHT half range
            // then search right half, else go left
            if (nums[m] < target && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    // 7. If not found
    return -1;
};