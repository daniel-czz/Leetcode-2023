# Leetcode-2023

1. 二叉树部分 - 从中序开始之后都要二刷！！！！



# 回溯

● 332.重新安排行程 ：主要是要选用合适的数据结构存储每条边，因为需要按照字典序安排行程，所以使用map<string,int>进行存储，其中int存储航班的个数，其实都是1，只是作为一个标志位，回溯终止的条件是航班都被使用

● 51. N皇后 ：层数为n，深度为n的回溯问题，回溯过程中需要满足要求，不能同行同列同斜线
使用一个chessboard记录每一行的状态，压入前进行判断，判列、45斜线、135斜线即可

● 37. 解数独 ：二维回溯，先按行递归再按列递归，递归过程中边判断是否合法实现剪枝


# 贪心
● 455.分发饼干 ：基础贪心策略，先满足胃口最小的，这样省的饼干更有可能给胃口大的孩子

● 376. 摆动序列 ：只考虑谷峰和谷底，选取最多的局部峰值；动态规划的解法感兴趣可以先了解下~

● 53. 最大子序和：求解最大的子数组和，每次前缀和到达负数重新计数，并且实时更新最大值

● 1005.K次取反后最大化的数组和 ：肯定是把负数替换为正数是最大的，如果不存在负数了，那么就反转最小的整数，并且可以重复反转，答案只要求返回数组最大和，因此可以进行排序

● 134. 加油站：首先判断gas总和是否大于cost总和，若大于则表示肯定存在一个位置满足条件，那么就可以将问题转化为类似最大子数组和的思路了，维护一个cursum，一旦小于0则说明该index不可能是答案，向下移动一位

● 135. 分发糖果 ：进行两次遍历，左边比右边大则右边糖果为1，再从右向左遍历，左边比右边大则左边糖果为右边+1

● 860.柠檬水找零 ：先尽可能的使用手中的10，保证之后的5足够使用,记录所有的5 10 的数量

● 406.根据身高重建队列 ：先按照身高从大到小进行排序，身高矮的要求才会多，处理完身高高的要求之后再贪心得处理身高矮的的要求，采用list进行插入提高速度，注意C++的list迭代器为双向迭代器，不是随机访问迭代器，只能一步一步移动

● 452. 用最少数量的箭引爆气球 ：每根箭尽可能向x轴右侧移动，射穿最多的气球，比如[1,2] [2,3]先把箭放到第一个区间的最右侧（此时不能再向右了，否则会射不到第一个区间），然后判断下一个区间的起始点在不在箭位置之前；注意：C++传入函数最好都使用引用，能够大大提高效率

● 435. 无重叠区间：先排序再贪心,按照右区间进行升序排序，然后从左到右遍历，根据右区间与下一个区间的关系进行答案的增减 

● 763.划分字母区间 ：记录每个字母的最后出现位置（类似于右区间），然后从左往后遍历，统计所遇到过的字符的最远出现位置，如果当前位置与最远出现位置重叠则为一个分割点

● 56. 合并区间 : 先排序后进行贪心重叠区域的合并，即每个区间尽可能大，实时更新区间所能到达的最右侧距离，一旦重叠进行更新区间否则添加元素；注意添加元素后也需要进行区间更新

● 738.单调递增的数字 ：从后向前进行处理，违反单调性则需要将前一位-1，并且更新ind的值（记录从哪位开始向后均可改成9）；从后向前处理的原因在于不覆盖结果

● 968.监控二叉树 ：此题比较难，可直接看题解。尽量将摄像头都放置在中间节点，涵盖父节点与子节点，从叶子节点开始往上看，使得所选的摄像头最少，定义节点的三个状态，在遍历的同时返回节点状态进行摄像头的添加


# 动态规划 

● 509. 斐波那契数：按照动规五部曲一步一步来就好啦，dp的入门题目，训练下dp的思维~另外这道题是很多dp题目的原型哈

● 70. 爬楼梯 ：和斐波那契数仅仅差在没有给出dp的状态转移方程

● 746. 使用最小花费爬楼梯 ：能够比较好的体现出dp的优势的一道题目， dp[i] 表示到达第i层所需要的最小花费，dp[i] = min(dp[i-1] + cost[i-1],dp[i-2] + cost[i-2])

● 62.不同路径 ，确定dp数组以及下标的含义: `dp[i][j] 表示到达[i][j]的所有可能的不同路径；确定递推公式: dp[i][j] = dp[i-1][j] + dp[i][j-1]; dp数组如何初始化: dp[0][0] = 1,第一行只能由dp[i-1][0]转移，第一列只能由dp[0][j-1]转移，均需要初始化； 确定遍历顺序：应该是先行后列，保证有前一行可以转移过来`

● 63. 不同路径 II ：和不同路径类似的，不过在障碍物的位置需要重新计算可行步，转移方程发生了改变，一到达障碍物处应变为0（不可达）其余情况一样

● 343. 整数拆分 ：确定dp数组以及下标的含义: `dp[i]` 表示整数i拆分为 k 个 正整数 的和的最大乘积；- 确定递推公式: `dp[i] = max(dp[i-k] * k,(i - k) * k)` 其中k是小于i的值;- dp数组如何初始化: `dp[1] = 1` - 确定遍历顺序：需要前面的状态所以是从前向后遍历 

● 96.不同的二叉搜索树 ：每多一个节点，都可以与前一状态的树相结合；确定dp数组以及下标的含义: dp[i] i个节点构成的互不相同的二叉搜索树   确定递推公式: dp[i] = sum(dp[i-j] * dp[j])  dp数组如何初始化: dp[0] = 1 确定遍历顺序：需要前面的状态所以是从前向后遍历

● 416. 分割等和子集：背包容量为数组和一半，是否能装满背包，每个数也是仅能选择一次，背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值

● 1049. 最后一块石头的重量 II ：尽量让石头分成重量相同的两堆，相撞之后剩下的石头最小，转换为01背包问题，和昨天的分割等和子集类似，自己尝试做一下哈

● 494. 目标和 ：加法的总和为x，那么减法对应的总和就是sum - x； 要求的是 x - (sum - x) = target, x = (target + sum) / 2; 问题就转化为，装满容量为x背包，有几种

● 474.一和零  ：背包最多装m个0，n个1；背包有两个维度，都满足要求内存放的最大个数；状态定义：`dp[i][j]`表示背包容量为i个0，j个1的背包能够装的最大子集数

● 518. 零钱兑换 II ：背包容量为amount，达到amount的方案数

● 377. 组合总和 Ⅳ  ：寻找排列的个数，视为背包大小为target能够装满的方案数，每个数值可以重复选择，注意需要外层遍历背包容量内层遍历物体，因为物体不同顺序视为不同组合

● 518. 零钱兑换 II ：背包容量为amount，达到amount的方案数

● 377. 组合总和 Ⅳ  ：寻找排列的个数，视为背包大小为target能够装满的方案数，每个数值可以重复选择，注意需要外层遍历背包容量内层遍历物体，因为物体不同顺序视为不同组合

● 70. 爬楼梯 （进阶）：和之前的爬楼梯不同，多了每次可以选择跳几步，好好掌握，感觉还是比较可能作为面试题的～

● 322. 零钱兑换 ：视为容量为amount的完全背包，装满的最少个数，如果dp[j - coins[i]]是初始值则跳过

● 279.完全平方数 ：背包容量为n，装满背包的最小次数，每个数可以重复取，完全背包问题，类似零钱兑换啦～

● 139.单词拆分 : 完全背包写法，背包即为s，能否恰好装满，dp[j] 表示 是否能够装满s[0:j], 外层为背包，内层为物品，保证每个子容量都可能可以使用各个物品，在遍历物品时直接使用find进行查找子串，遍历了所有长度

● 121. 买卖股票的最佳时机 ：每天分为两个状态，当天结束有股票和当天结束无股票，定义为`dp[i][1] 和 dp[i][0];`

● 122.买卖股票的最佳时机II :一样分为当天持有和没持有进行讨论，可以进行多笔交易所以转移方程发生了改变

● 123.买卖股票的最佳时机III：多了交易次数的限制，可以再增加两个状态，`dp[i][2]`代表第i天第二次交易不持有股票，`dp[i][3]`表示第i天第二次交易持有股票

● 188.买卖股票的最佳时机IV ：最多可以完成 k 笔交易,类似两笔交易的限制，多增加状态，有 2 * k + 1个状态进行更新即可;`dp[i][j]` 如果j为奇数代表持有股票，偶数代表没有股票

● 309.最佳买卖股票时机含冷冻期 ：将限制改为了一个冷冻期，则可以增加一个冷冻期的状态进行更新;`dp[i][0] 表示当天买入股票，dp[i][1] 表示当天是冷冻期，dp[i][2] 表示当天卖出了股票`; 卡哥分成了4个状态进行讨论，逻辑也比较清楚，不过能看懂就行

● 714.买卖股票的最佳时机含手续费 :相当于在卖出时需要增加手续费，即减少收益

● 300.最长递增子序列 ：dp[i] 表示以i结尾的数组的最长递增子序列的长度；dp[i] = max(dp[i],dp[j] + 1(if nums[i] > nums[j]))；需要进行从前向后的遍历,dp[0] = 1;

● 674. 最长连续递增序列 ：与最长子序列的差别在于需要时连续的，那么一旦不连续直接归1即可

● 718. 最长重复子数组 ：需要使用二维dp来枚举子数组，子数组元素若不相等应该直接置为0

