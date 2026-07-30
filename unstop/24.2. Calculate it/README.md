> ## Problem Statement

You are given two integers, X and Y, and we had to find the number of integers between X and Y (inclusive) that could be expressed in the form of 2^A * 3^B,

where A and B are non-negative integers,(A,B≥0).

> ## Input Format
```
The first line contains two integers, X and Y, separated by a space.
```

> ## Output Format
```
Output should print the number of integers between X and Y (inclusive) that could be expressed in the form of 2^A * 3^B.

```

> ## Constraints
```
1 <= X <= Y<= 10^6

```


> ## Sample Testcase 0

**Testcase Input**
```
1 5
```
**Testcase Output**
```
4
```
**Explanation**

1= 2^0 * 3^0
2 = 2^1 * 3^0
3 =  2^0 * 3^1
4 = 2^2 * 3^0


It can be shown that 5 can’t be expressed in the required form.

---

> ## Sample Testcase 1

**Testcase Input**
```
2 12
```
**Testcase Output**
```
7
```
**Explanation**

2 = 2^1 * 3^0
3 =  2^0 * 3^1
4 = 2^2 * 3^0
6 =  2^1 * 3^1
8 = 2^3 * 3^0
9 =  2^0 * 3^2
12 = 2^2 * 3^1


It can be shown that 5,7,10,11 can’t be expressed in the required form.

---


<details>
<summary><strong>Companies</strong></summary>

`Juspay` `Amazon` `Swiggy` `Qualcomm` `Oracle`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Math` `Binary Exponentiation`
</details>
