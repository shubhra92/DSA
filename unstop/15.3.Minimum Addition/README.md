> ## Problem Statement

Bob gave Alice a string str that represents the pattern of trees in a garden, where str[i] denotes the pattern of an ith tree. Bob wants the pattern of trees to be the same if seen in the forward and backward directions. By mistake, the last pattern of the trees changed to the ‘c’ pattern. 

To make Bob happy, Alice planted some trees at the start of the garden so that he could make the final pattern the same from both forward and backward directions. Your task is to find the minimum number of plants to be planted in the garden to make Bob happy. 

Note: str contains only lowercase english alphabets.

> ## Input Format
```
The first and only line contains a single string str.
```

> ## Output Format
```
Print a single integer that represents the minimum number of plants to be planted at the starting of the garden to make Bob happy.

```

> ## Constraints
```
1 <= |str| <= 10^5
```


> ## Sample Testcase 0

**Testcase Input**
```
caan
```
**Testcase Output**
```
0
```
**Explanation**

As the last pattern of the tree changed to ‘c,’ the string will become “caac” which is already the same pattern from both forward and backward directions.


---

> ## Sample Testcase 1

**Testcase Input**
```
abd
```
**Testcase Output**
```
2
```
**Explanation**

After changing the last pattern, the string will become “abc”, and we can plant a tree with pattern "b" and “c” at starting. 

The new string will be "cbabc"

The string will become the same from both forward and backward direction after planting two trees. Hence the answer is 2.

---


<details>
<summary><strong>Companies</strong></summary>

`Accolite` `VMware`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Hashing` `Unordered map` `Hash Map` `Strings`
</details>
