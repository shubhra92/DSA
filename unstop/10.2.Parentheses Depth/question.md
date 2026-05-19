> ## Problem Statement

Dhruv needs help in determining the maximum nesting depth of a given valid parentheses string (VPS) S. A valid parentheses string is defined according to the following rules:

The VPS "" has a nesting depth of 0.
The VPS "()" has a nesting depth of 1.
The VPS "()()" has a nesting depth of 1.
The VPS "(())" has a nesting depth of 2.
Dhruv is looking for a program that, given a valid parentheses string S, computes the maximum nesting depth.


> ## Input Format
```
The first line of input contains an integer N, representing the length of the string S.

The second line contains the string S, which is a valid parentheses string consisting of digits 0-9 and characters '+', '-', '*', '/', '(', ')'.
```

> ## Output Format
```
Print a single integer representing the maximum nesting depth of the string S.
```

> ## Constraints
```
1 ≤ N ≤10^2
```


> ## Sample Testcase 0

**Testcase Input**
```
6
(()())
```
**Testcase Output**
```
2
```
**Explanation**

The input string "(()())" is a valid parentheses string with two parts:


The first part "(())" has a nesting depth of 2.


The second part "()" has a nesting depth of 1. The maximum nesting depth is 2.

---

> ## Sample Testcase 1

**Testcase Input**
```
8
(())(())
```
**Testcase Output**
```
2
```
**Explanation**

The input string "(())(())" represents two enclosed VPS: "(())" and "(())".
Each inner VPS has a nesting depth of 1. However, since they are concatenated and not nested further, the overall nesting depth remains 2.

---


<details>
<summary><strong>Companies</strong></summary>

`Walmart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Stack` `Strings`
</details>
