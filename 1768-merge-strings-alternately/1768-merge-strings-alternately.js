/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let n = word1.length, m = word2.length;
    let i = 0, j = 0;
    let result = '';

    while(i< n && j< m){
        result += word1[i++];
        result += word2[j++];
    }

    // Fill remaining letters
    while(i< n){
        result += word1[i++];
    }

    while(j< m){
        result += word2[j++];
    }

    return result;
};