/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for(let i=0;i<asteroids.length;i++){
        // Push asteroids moving right(+)
        if(asteroids[i] > 0){
            stack.push(asteroids[i]);
        }
        else{
            // Destroy all smaller positive asteroids
            while(stack.length > 0 && stack[stack.length - 1] > 0 && Math.abs(asteroids[i]) > stack[stack.length - 1]){
                stack.pop();
            }
            // If no positive asteroid remains or already negative present -> 
            // no collision can happen 
            if(stack.length === 0 || stack[stack.length - 1] < 0){
                stack.push(asteroids[i]);
            }
            // If both are equal
            else if(Math.abs(asteroids[i]) === stack[stack.length - 1]){
                stack.pop();
            }
            // else:
            // current asteroid is smaller, so it gets destroyed
        }
    }

    return stack;
};