# KMP
学习视频 - https://www.bilibili.com/video/BV1PD4y1o7nd?t=745.8    

- 背景，什么是前缀 后缀 
    - 前缀 - 不包含最后一个字符的全部子字串
    - 后缀 - 不包含第一个字母的全部子字符串
    - 例子  aabaaf 
    - 前缀 - a aa aab aaba aabaa
    - 后缀 - f af aaf baaf abaaf 

- KMP
    - 模式串 = aabaaf，字符串 = aabaabaaf
    - 目的：找到字符串 内匹配 模式串的子串
    - kmp = 就是找到最长的相等前后缀 
    
    - 第一步 找到前缀表 （next数组）
        - 所有模式串的子字串 - 该模式串子串的最长相等前后缀长度 
        - a - 0 （不存在相等前后缀）
        - aa - 1 （有相等前后缀a 长度为1）
        - aab - 0 
        - aaba - 1   
        - aabaa - 2 （有相等前后缀aa 长度为2）
        - aabaaf - 0  
        - 前缀表 0 1 0 1 2 0 
        
    - 第二步 - 拿字符串和模式串进行比较，当不相同时，就回到 “最长相等前后缀”的位置  继续比较 
        - 0 1 2 3 4 5 6 7 8 index 
        - a a b a a b a a f 字符串 
        - a a b a a f       模式串 
        - 0 1 0 1 2 0       前缀表 
        - 比较到f的时候不相同了，回到 “最长可匹配前后缀”的位置 就是前缀表 aabaa 2的位置，那就回到index 2 的位置继续比较，当前index 字符串在5 模式串在5 
        
        - 0 1 2 3 4 5 6 7 8 index 
        - a a b a a b a a f 字符串 
        - a a b a a f       模式串 
        - 0 1 0 1 2 0       前缀表  
        -     ｜ 跳回b开始匹配，当前index 字符串在5 模式串在 2  

    - 回退逻辑 
    ```js
        while (j > 0 && pattern[j] !== text[i]) {
            j = next[j - 1]; // 回退，直到找到可以匹配的位置 or 回退到0
        }
    ```
    
