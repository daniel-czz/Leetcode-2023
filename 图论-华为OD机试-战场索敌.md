# 华为OD机试- 战场索敌
https://juejin.cn/post/7254830852068327482     

> dfs 思路 - 找到所有的敌人然后记录敌人个数
```js

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const readline = (function () {
    const inputs = [
      '4 5 1',
      '. . # E E',
      'E . # E .',
      '# # # # #',
      'E . # E E',
    ]; // 模拟的输入数据
    let index = 0;
    return async () => inputs[index++];
  })();
  let rows=0, cols=0, targetNum=0
  let res = 0 
  let curEnemy = 0 
  let direction = [[0,1], [0, -1], [1,0], [-1, 0]]
  let grid = null 
  let visited = null 

  function dfs(x, y){
    
    for(let d of direction){
      let nextX = x + d[0]
      let nextY = y + d[1]
      if(nextX < 0 || nextY < 0 || nextX >= rows || nextY >= cols || grid[nextX][nextY] == '#') continue
      if(!visited[nextX][nextY] ) {
        visited[nextX][nextY] = true 
        if(grid[nextX][nextY] == 'E')curEnemy++ 
        dfs(nextX, nextY)
      }
    }
  }

  void async function () {
    [rows, cols, targetNum] = (await readline()).split(' ').map(Number)
    visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false))
    console.log(visited)
    grid = []
    while(line = await readline()){
      let curLine = line.split(' ')
      grid.push([...curLine])
    }
    console.log(grid)
    
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        curEnemy = 0 
        if(grid[i][j] == 'E' && !visited[i][j]) {
          curEnemy++
          console.log('enter', i, j)
          visited[i][j] = true 
          dfs(i, j)
        }
        // console.log(visited)
        if(curEnemy >= targetNum) {
          res++
          console.log(res)
        }
      }
    }
    console.log('res --> ', res)
    return res 
  }()
```