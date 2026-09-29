/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = "aeiou";
    let count = 0;
    let result = 0;
    let i = 0;

    for(let j=0;j<s.length;j++){
        const ch = s.charAt(j);
        if(vowels.includes(ch)){
            // vowel
            count++;
        }

        if(j-i+1 === k){
            result = Math.max(result, count);
            if(vowels.includes(s.charAt(i))){
                count--;
            }
            i++;
        }
    }

    return result;
};