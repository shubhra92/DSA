> ## Problem Statement

You are given an array Arr of size N.

You need to count the number of "good indices" in the array. An index i is considered "good" if the sum of the elements from the first index to the i-th index (inclusive) has exactly one bit set in its binary representation.

> ## Input Format
```
The first line of input contains an integer N,representing the size of the array Arr.

The second line of input contains N space seperated integers,representing elements of the array Arr.
```

> ## Output Format
```
Display a single integer represents a number of good indices in the array.
```

> ## Constraints
```
1 <= N <= 10^5.

0 <= A[i] <= 10^5.
```


> ## Sample Testcase 0

**Testcase Input**
```
1
9
```
**Testcase Output**
```
0
```
**Explanation**

The array is [9]
Sum till the first index is 9, which in binary has a two-bit set.
Therefore, we have zero good indexes in the array.

---

> ## Sample Testcase 1

**Testcase Input**
```
3
1 2 5
```
**Testcase Output**
```
2
```
**Explanation**

The array is [1, 2, 5]
Sum till the first index is 1; in binary, it has only one bit set.
The sum till the second index is 3; in binary, it has a two-bit set.
The sum till the third index is 8; in binary, it has only a 1-bit set.
Therefore, a number of good indices in the array are 2.

---


<details>
<summary><strong>Companies</strong></summary>

`Facebook` `Flipkart` `SAP labs`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Math` `Prefix Sum` `Bit-Manipulation`
</details>
