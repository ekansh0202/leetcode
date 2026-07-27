/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let i=0;i<tokens.length;i++){
        if(tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '/' && tokens[i] !== '*'){
            stack.push(Number(tokens[i]));
        }
        else{
            let element1 = stack.pop();
            let element2 = stack.pop();
            switch(tokens[i]){
                case '+':
                    stack.push(element2 + element1);
                    break;
                case '-':
                    stack.push(element2 - element1);
                    break;
                case '*':
                    stack.push(element2 * element1);
                    break;
                case '/':
                    stack.push(Math.trunc(element2 / element1));
                    break;
            }
        }
    }

    return stack.pop();
};