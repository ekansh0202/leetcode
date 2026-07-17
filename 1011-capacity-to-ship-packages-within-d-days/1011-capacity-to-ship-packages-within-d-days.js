/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    // this is like koko eating banana problem
    // we will need to find the range first from minimum to maximum capacity
    // the minimum should be atleast the maximum weight only then all the 
    // items can be loaded onto the ship(not considering the number of days to
    // load here)
    // and the maximum capacity can be the sum of all the weights present

    // Find the minimum capacity
    let l = Math.max(...weights);

    // Find the maximum capacity
    let sum = 0;
    for(let i=0;i<weights.length;i++){
        sum += weights[i];
    };

    let r = sum;

    while(l < r){
        let m = l + Math.floor((r-l) / 2);

        let daysTaken = getDaysTaken(m, weights);

        if(daysTaken <= days){
            r = m;
        }
        else{
            l = m + 1;
        }
    }
    
    return r;
};

const getDaysTaken = (m, weights) => {
    let days = 1;
    let currentWeight = 0;
    for(let i=0;i<weights.length;i++){
        if(currentWeight + weights[i] > m){
            days++;
            currentWeight = 0;
        }
        currentWeight += weights[i];
    }

    return days;
};