/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(" ").filter((item) => item !== "");
    let left = 0, right = str.length - 1;

    while(left < right){
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }

    return str.join(" ").trim();
};