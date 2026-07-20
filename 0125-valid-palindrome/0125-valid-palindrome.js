/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';

    for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if (
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= 'a' && ch <= 'z') ||
        (ch >= '0' && ch <= '9')
    ) {
        str += ch.toLowerCase();
    }
}

    let l=0, r=str.length - 1;

    while(l <= r){
        if(str.charAt(l) !== str.charAt(r)){
            return false;
        }
        l++;
        r--;
    }

    return true;
};