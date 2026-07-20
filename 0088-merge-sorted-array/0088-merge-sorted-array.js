/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // // we can use two pointer and extra space

    // let result = [];

    // let l=0, r=0;

    // while(l < m && r < n){
    //     if(nums1[l] <= nums2[r]){
    //         result.push(nums1[l]);
    //         l++;
    //     }
    //     else{
    //         result.push(nums2[r]);
    //         r++;
    //     }
    // }

    // // if 1st array has remaning elements we can just push to result
    // while(l < m){
    //     result.push(nums1[l]);
    //     l++;
    // }

    // // if 2nd array has remaning elements we can just push to result
    // while(r < n){
    //     result.push(nums2[r]);
    //     r++;
    // }

    // for(let i=0;i<result.length;i++){
    //     nums1[i] = result[i];
    // }


    // using constant space

    // The trick is to fill nums1 from the end, because the end already has empty space (0s) //reserved for nums2.

    // Use three pointers:

    // i = m - 1 → last valid element in nums1
    // j = n - 1 → last element in nums2
    // k = m + n - 1 → last position in nums1

    // At each step, place the larger element at nums1[k].

    let i = m-1, j=n-1, k = m+n-1;

    while(i >=0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }
        else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements from nums2;
    while(j >= 0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};