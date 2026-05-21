> ## Problem Statement

Given an array of N integers, you need to find a pair (i,j) such that j>i and Aj-Ai>0.

If such a pair exist then print the maximum value of Aj-Ai, otherwise print -1.

> ## Input Format
```
The first line of the input contains a single integer T, the number of test cases.

Each test case contains the following, the first line contains a single integer N, the size of an array and the next line contains N  space-separated integers.
```

> ## Output Format
```
For each line print the maximum difference if it is greater than zero otherwise print -1.
```

> ## Constraints
```
1<=T=10^3

1<=N<=10^5

1<=A[i]<=10^6
```


> ## Sample Testcase 0

**Testcase Input**
```
1
5
3 4 1 8 9
```
**Testcase Output**
```
8
```
**Explanation**

We can choose 9 as the second element and 1 as the first element and the difference will be 9 -1= 8 which is the maximum possible difference.

---

> ## Sample Testcase 1

**Testcase Input**
```
2
6
3 7 1 4 2 4
5
5 4 3 2 1
```
**Testcase Output**
```
4
-1
```
**Explanation**

In the first array, we can choose 7 as the second element and 3 as the first element our max difference will be 7-3=4.


In the second test case, the maximum difference will be -1 because it is every pair difference of (Aj - Ai; j>i) is less than zero simple print -1.

---


<details>
<summary><strong>Companies</strong></summary>

`Zoho` `Paytm` `Flipkart` `Amazon`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Math` `Greedy` `Two Pointer`
</details>
