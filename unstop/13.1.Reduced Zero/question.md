> ## Problem Statement

You have to make a given integer N to zero.

You can subtract the smallest prime factor of N and subtract it from N and stop when N becomes zero.

Return the number of times you have applied the operations.

> ## Input Format
```
The line contains a single Integer representing N.
```

> ## Output Format
```
A single integer representing a number of operations you have performed.
```

> ## Constraints
```
2 <= N <= 10^9, where N is the entered integer.
```


> ## Sample Testcase 0

**Testcase Input**
```
4
```
**Testcase Output**
```
2
```
**Explanation**

2 is the smallest prime divisor of 4, 4-2 = 2
Again, 2 is the smallest prime divisor of 2; therefore 2-2 = 0. We stop as N becomes zero.
So, our answer is 2.


---

> ## Sample Testcase 1

**Testcase Input**
```
7

```
**Testcase Output**
```
1
```
**Explanation**

7 is the smallest prime divisor. Thus it gets subtracted right away to make a 0.


---


<details>
<summary><strong>Companies</strong></summary>

`MakeMyTrip` `Google`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Prime Sieve` `Number Theory`

</details>
