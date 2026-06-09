> ## Problem Statement

You are given an array of integers of size N. Your task is to find the smallest missing positive integer that is not present in the array.

Once you have identified this integer, convert it into a string and use the ASCII value of its first digit. Add this ASCII value to the sum of all elements in the given array.

Finally, return the computed sum.

> ## Input Format
```
An array nums of size N is given as input.
```

> ## Output Format
```
Return the sum obtained.
```

> ## Constraints
```
1 <= N <= 5 * 10^5

-10^6 <= nums[i] <= 10^6
```


> ## Sample Testcase 0

**Testcase Input**
```
3
3 1 0
```
**Testcase Output**
```
54
```
**Explanation**

Ascii value of 2 is 50 and sum = 50+3+1+0=54


---

> ## Sample Testcase 1

**Testcase Input**
```
4
2 4 3 5
```
**Testcase Output**
```
63
```
**Explanation**

Ascii value of 1=49
Sum=63


---


<details>
<summary><strong>Companies</strong></summary>

`Accenture` `Deolitte`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Sorting` `Hashing` `HashTable`
</details>
