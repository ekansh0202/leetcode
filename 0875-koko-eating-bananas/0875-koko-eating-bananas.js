/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // here we know that the range will always be from
    // 1 till the max number of element in array i.e last element
    // beyond that the time will only decrease
    // since we want to find the minimum number of bananas
    // so we can fix maximum number of bananas possible

    // Find max element
    // let pilesCopy = [...piles];
    // pilesCopy.sort((a,b) => a-b);
    let r = Math.max(...piles);


    let l = 1;

    while(l < r){
        let m = l + Math.floor((r-l) / 2);

        let totalTimeTaken = getTotalTimeTaken(m, piles);

        if(totalTimeTaken <= h){
            r = m;
        }
        else{
            l = m + 1;
        }
    }

    return r;
};


const getTotalTimeTaken = (m, piles) => {
    let totalTime = 0;

    for(let i=0;i<piles.length;i++){
        totalTime += Math.ceil(piles[i]/m);
    }

    return totalTime;
};