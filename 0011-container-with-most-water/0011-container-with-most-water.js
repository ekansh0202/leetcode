/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Start with the maximum possible width
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while (left < right) {
        // Height is limited by the shorter line
        const currentHeight = Math.min(height[left], height[right]);

        // Width is the distance between the two pointers
        const width = right - left;

        // Calculate the current container area
        const area = currentHeight * width;

        // Store the maximum area seen so far
        maxArea = Math.max(maxArea, area);

        // Move the shorter line because it limits the area.
        // Moving the taller line only decreases the width and
        // cannot increase the limiting height.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};