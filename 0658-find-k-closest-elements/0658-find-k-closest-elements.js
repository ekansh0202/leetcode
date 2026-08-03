/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0, right = arr.length - 1;
    
    // Shrink the window until only k elements remain.
    while ((right - left + 1) > k) {

        // Remove the element that is farther from x.
        // If distances are equal, remove the right element
        // to keep the smaller value (as required by the problem).
        if (Math.abs(x - arr[left]) > Math.abs(x - arr[right])) {
            left++;
        } else {
            right--;
        }
    }

    // The remaining window contains the k closest elements.
    return arr.slice(left, right + 1);
};