/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    let i = 0;
    let count = 0;

    for(let j=0;j<arr.length;j++){
        sum += arr[j];

        if(j-i+1 === k){
            if((sum / k) >= threshold) count++;
            sum -= arr[i];
            i++;
        }
    }

    return count;
};