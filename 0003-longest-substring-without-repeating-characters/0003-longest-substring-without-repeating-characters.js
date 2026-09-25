/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let set = new Set();
    let result = 0;

    for(let j=0;j<s.length;j++){
        while(set.has(s.charAt(j))){
            set.delete(s.charAt(i));
            i++;
        }
        set.add(s.charAt(j));
        result = Math.max(result, j - i + 1);
    }

    return result;
};