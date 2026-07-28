/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let boats = 0;
    people.sort((a,b) => a - b);

    // Always try to pair the heaviest person with the lightest.
    // If even the lightest can't fit, the heaviest must go alone.
    // If lightest + heaviest > limit
    // then anyone + heaviest > limit
    // So the heaviest person has no possible partner.
    // They must go alone.

    let i=0, j=people.length - 1;
    while(i<=j){
        if(people[i] + people[j] <= limit){
            i++;
        }
        j--;
        boats++;
    }

    return boats;
};