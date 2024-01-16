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
