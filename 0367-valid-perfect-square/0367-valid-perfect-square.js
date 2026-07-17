/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    if(num < 2) return true;

    let l = 1;
    let r = Math.floor(num/2);

    while(l<=r){
        let m = l + Math.floor((r-l)/2);

        if(m**2 === num){
            return true;
        }
        else if(m**2 < num){
            l = m+1;
        }
        else{
            r = m-1;
        }
    }
    return false;
};