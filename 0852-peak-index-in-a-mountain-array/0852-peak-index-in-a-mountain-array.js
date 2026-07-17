/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length - 1;

    while(l < r){
        let m = l + Math.floor((r - l)/2);

        if(arr[m+1] < arr[m]){
            r = m;
        }
        else{
            l = m+1;
        }
    }
    return r;
};