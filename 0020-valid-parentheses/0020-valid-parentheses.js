/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);

        if(ch === '(' || ch === '[' || ch === '{'){
            stack.push(ch);
        }
        else{

            let top = stack.pop();

            switch(ch){
                case ')':
                    if(top !== '(') return false;
                    break;
                
                case ']':
                    if(top !== '[') return false;
                    break;

                case '}':
                    if(top !== '{') return false;
                    break;
            }
        }
    }

    return stack.length === 0;
};