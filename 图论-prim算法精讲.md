# 最小生成树prim算法精讲
代码随想录 - https://www.programmercarl.com/kamacoder/0053.寻宝-prim.html#解题思路         
53. 寻宝（第七期模拟笔试） - https://www.programmercarl.com/kamacoder/0053.寻宝-prim.html#解题思路      


> 思路 
    prim算法：用于在加权无向连通图中找到最小生成树。        
    生成树：对于一个连通无向图来说，生成树是一个包含图中所有节点的子图，并且是一棵无环树。最小生成树是在所有可能的生成树中，权值和最小的生成树。     
    >> 1. 选距离生成树最近节点  
    >> 2. 最近节点加入生成树     
    >> 3. 更新非生成树节点到生成树的距离（即更新minDist数组）     
```js 
function prim(v, edges){
  const minDist = new Array(v+1).fill(10001) // 记录到达该点的最短距离 
  const isInTree = new Array(v+1).fill(false) // 记录是否加入到树里 
  const grid = new Array(v+1).fill(0).fill(0).map(() => new Array(v+1).fill(10001)) // 记录两个点之间的路径长度 
  
  for(let edge of edges){
    grid[edge[0]][edge[1]] = edge[2]
    grid[edge[1]][edge[0]] = edge[2]
  }
  // console.table(grid)
  // console.table(isInTree)
  
  for(let i = 1; i < v ; i++){
    let cur = 0 
    let curMin = Number.MAX_VALUE

    // 选距离生成树最近节点  
    // 拿到 cur = 7， 从节点7开始  
    for (let j = 1; j < v+1; j++) {
      if(!isInTree[j] && minDist[j] < curMin){
        cur = j 
        curMin = minDist[j]
      }
    }

    // 最近节点加入生成树     
    // 把 7 加入到树中 
    isInTree[cur] = true 

    // 更新非生成树节点到生成树的距离（即更新minDist数组）   
    // 所有 7 能到的节点 都有更新 minDist
    for(let x = 1; x < v+1; x++) {
      if(!isInTree[x] && minDist[x] > grid[cur][x]){
        minDist[x] = grid[cur][x]
      }
    }
  }

  console.log(minDist.slice(2).reduce((p, c) => p + c, 0))
}


async function main() {
  const rl = require('readline').createInterface({ input: process.stdin })
  const iter = rl[Symbol.asyncIterator]()
  // const readline = async () => (await iter.next()).value
  const readline = (function () {
        const inputs = [
          '7 11',
          '1 2 1',
          '1 3 1',
          '1 5 2',
          '2 6 1',
          '2 4 2',
          '2 3 2',
          '3 4 1',
          '4 5 1',
          '5 6 2',
          '5 7 1',
          '6 7 1',
        ]; // 模拟的输入数据
        let index = 0;
        return async () => inputs[index++];
      })();
  const [v, e] = (await readline()).split(" ").map(Number)
  const edges = []
  for (let i = 0 ; i < e ; i++) {
      edges.push((await readline()).split(" ").map(Number))
  }
  // console.table(edges)
  prim(v, edges)
}


main()
```