> ## Problem Statement

You are given two strings, s1 and s2, both of the same length. A string s1 can break string s2 if, after sorting both strings in ascending order, every character in s1 is greater than or equal to the corresponding character in s2. Similarly, s2 can break s1 if every character in s2 is greater than or equal to the corresponding character in s1.

Mathematically: A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

Your task is to determine whether either s1 can break s2 or s2 can break s1.


> ## Input Format
```
The first line represents String s1.

The second line represents String s2.
```

> ## Output Format
```
 A boolean value representing if any permutation of s1 can break s2 or vice versa.

if boolean value is 1 , print "true" , else "false".

If s1 and s2 have different lengths, print false.
```

> ## Constraints
```
1 <= n <= 10^5

All strings consist of lowercase English letters
```


> ## Sample Testcase 0

**Testcase Input**
```
abc
xya
```
**Testcase Output**
```
true
```
**Explanation**

 "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc"

---

> ## Sample Testcase 1

**Testcase Input**
```
 abe 
acd
```
**Testcase Output**
```
false
```
**Explanation**

 All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `Flipkart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `sorting` `Greedy`
</details>
