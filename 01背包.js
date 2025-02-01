// // 二维解法
// function testSizeBagProblem (size, value, bagSize) {
//     let len = size.length;
//     let dp = new Array(len).fill(0).map( () => new Array(bagSize + 1).fill(0))
//     for(let i = 1; i < bagSize+1; i++){ dp[0][i] = value[0]}

//     for (let i = 1; i < len; i++){ // 物品 
//         for (let j = 0; j <= bagSize; j++){ // 背包容量 
//             if (j < size[i]) {
//                 if(j < size[i]) dp[i][j] = dp[i - 1][j];
//             }else{
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-size[i]] + value[i])
//             }
//         }
//     }
//     console.table(dp)
//     return dp[len-1][bagSize]
// }

// function test () {
//     console.log(testSizeBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
// }

// test();

function dpF (items, price, bagSize) {
  let dp = new Array(bagSize+1).fill(0)

  for(let i = 0; i < items.length; i++ ) { // 物品 0 1 2 3 
    for( let j = bagSize; j >= 1; j--) { // 从后向前便利 
      if(j >= items[i]){
        dp[j] = Math.max(dp[j], dp[j - items[i]] + price[i])
      }else{
        dp[j] = dp[j]
      }
    }
  }
  console.table(dp)
}

dpF([1,3,4], [15, 20, 30], 4)