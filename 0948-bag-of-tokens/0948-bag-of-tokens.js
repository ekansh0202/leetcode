/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    // Sort so we can always access the smallest and largest token.
    tokens.sort((a, b) => a - b);

    let left = 0;
    let right = tokens.length - 1;
    let score = 0;
    let maxScore = 0;

    // Greedy:
    // - Buy the smallest token to gain score with minimum power.
    // - Sell the largest token to gain maximum power by losing one score.
    while (left <= right) {
        if (power >= tokens[left]) {
            // Play smallest token face up (power -> score)
            power -= tokens[left];
            score++;
            maxScore = Math.max(maxScore, score);
            left++;
        } else if (score > 0) {
            // Play largest token face down (score -> power)
            power += tokens[right];
            score--;
            right--;
        } else {
            // Cannot buy or sell anymore
            break;
        }
    }

    return maxScore;
};