// 二维解法
function testSizeBagProblem (size, value, bagSize) {
    let len = size.length;
    let dp = new Array(len).fill(0).map( () => new Array(bagSize + 1).fill(0))
    for(let i = 1; i < bagSize+1; i++){ dp[0][i] = value[0] + dp[0][i-1]} //重复放同一间物品

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

// 一维数组解法 
function test_completePack1() {
    let weight = [1, 3, 4, 5]
    let value = [15, 20, 30, 55]
    let bagWeight = 6
    let dp = new Array(bagWeight + 1).fill(0)
    for(let i = 0; i <= weight.length; i++) {
        for(let j = weight[i]; j <= bagWeight; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    console.log(dp)
}

test_completePack1()