
// Constructor
var MinStack = function () {
    // Stores all the elements
    this.stack = [];

    // Stores only the minimum elements
    this.minStack = [];
};

// Push an element into the stack
MinStack.prototype.push = function (val) {
    // Always push into the main stack
    this.stack.push(val);

    // If minStack is empty OR
    // current value is smaller than or equal to current minimum,
    // push it into minStack as well
    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};

// Remove the top element
MinStack.prototype.pop = function () {
    // Remove the top element from the main stack
    const removed = this.stack.pop();

    // If the removed element is also the current minimum,
    // remove it from minStack
    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

// Return the top element of the stack
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

// Return the current minimum element
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */