# 中缀表达式 → 后缀表达式 → 表达式树

题目：https://leetcode.cn/problems/search-in-rotated-sorted-array/description/            
题解：https://leetcode.cn/problems/search-in-rotated-sorted-arra

```js
class treeNode {
    constructor(val, left = null, right = null) {
        this.val = val 
        this.left = left 
        this.right = right 
    }
}

function getLevel(operator) {
    switch (operator) {
        case '+':
            return 1; 
        case '-':
            return 1;
        case '*':
            return 2;
        case '/':
            return 2;
        case '^':
            return 3;
        default:
            return 0;
    
    }
}


function infixToPostfix(expression) {
    let operators = []
    let output = []
    let token = expression.split('').filter(e => e != ' ')
    // console.log(token)
    for(let i of token) {
        // console.log(i)
        if(!isNaN(i) && i.trim() !== '') { // 数字 
            output.push(i)
        }else if(i == '(') { // 左括号
            operators.push('(')
        }else if(i == ')') { // 右括号
            while(operators.length) {
                let cur = operators.pop()
                if(cur == '(') break 
                output.push(cur)
            }
        }else { // 计算符号 
            if(getLevel(i) > getLevel(operators[operators.length - 1])) { // 如果当前读取的符号 > operator的最后一个 -- 直接push 
                operators.push(i)
            }else {
                while(getLevel(operators[operators.length - 1]) <= getLevel[i]) { // 如果当前读取的符号 <= operator的最后一个 -- 更新output 
                    let cur = operators.pop()
                    output.push(cur)
                }
                operators.push(i)
            }
        }
        // console.log(output, operators)
        // console.log('---------')
    }
    while(operators.length) {
        output.push(operators.pop())
    }
    console.log('res - ', output)
    return output
}

function postfixToTree(postfix) {
    let stack = []
    for(let i of postfix) {
        if(!isNaN(i)) { // 是数字 
            stack.push(new treeNode(i, null, null))
        }else { //不是数字 
            let right = stack.pop()
            let left = stack.pop()
            stack.push(new treeNode(i, left, right))
        }
    }
    return stack.pop()
}


let expression = "3 + 5 * (2 - 8)"; 
let postfix = infixToPostfix(expression);
let tree = postfixToTree(postfix)
```