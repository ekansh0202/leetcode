/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let maxLength = 0;
    for(let i=1;i<arr.length - 1;i++){
        // Found a peak
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            let left = i;
            let right = i;

            while(left > 0 && arr[left] > arr[left - 1]) left--;
            while(right < arr.length - 1 && arr[right] > arr[right + 1]) right++;

            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength;
};