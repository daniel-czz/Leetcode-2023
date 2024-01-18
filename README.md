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

