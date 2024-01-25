// 二维解法
function testSizeBagProblem (size, value, bagSize) {
    let len = size.length;
    let dp = new Array(len).fill(0).map( () => new Array(bagSize + 1).fill(0))
    for(let i = 1; i < bagSize+1; i++){ dp[0][i] = value[0]}

    for (let i = 1; i < len; i++){ // 物品 
        for (let j = 0; j <= bagSize; j++){ // 背包容量 
            if (j < size[i]) {
                if(j < size[i]) dp[i][j] = dp[i - 1][j];
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-size[i]] + value[i])
            }
        }
    }
    console.table(dp)
    return dp[len-1][bagSize]
}

function test () {
    console.log(testSizeBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
