> ## Problem Statement

On a far-off planet, a baby alien has N blocks to play with. Each block has a lowercase English alphabet written on it. He arranged the blocks in a line and created a string S. The baby’s name is another string P of length M.

The baby can pick M consecutive blocks from his string of blocks and rearrange them to form his name. Now, he wants to find out all such groups of m consecutive boxes that can be rearranged to form his name.

Note: Both the strings S and P consist entirely of lowercase English alphabets

> ## Input Format
```
The first line of the input contains the string S, which was made by arranging the N blocks in a line.

The second line contains another string P – the baby’s name.
```

> ## Output Format
```
In the first line, print a single integer X – the number of groups of blocks that can be rearranged to form the baby’s name.

The second line should contain X space-separated integers – the first index of each group of consecutive blocks (considering 1-based indexing).

 If X=0 then print none

```

> ## Constraints
```
1 <= N, M <= 105

```


> ## Sample Testcase 0

**Testcase Input**
```
cbaebabacd
abc
```
**Testcase Output**
```
2
1 7
```
**Explanation**

String 's' is "cbaebabacd".
String 'p' is "abc".


The output "2" indicates there are two occurrences of anagrams of 'p' in 's'. The starting indices of these occurrences are "1" and "7". These indices correspond to the starting positions of the anagrams "cba" at index 1 and "bac" at index 7 in string 's'.


---

> ## Sample Testcase 1

**Testcase Input**
```
abab
ab
```
**Testcase Output**
```
3
1 2 3 
```
**Explanation**

String 's' = "abab"
String 'p' = "ab"


The output is:


Count of occurrences: 3
Starting indices of 'p' in 's': 1, 2, 3
"ab" starts at index 1 in "abab".
"ab" starts at index 2 in "abab".
"ab" starts at index 3 in "abab".


Therefore, the output lists the count of occurrences as 3, followed by the starting indices where 'p' appears in 's'.

---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `HCL` `Zoho` `Mastercard`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Sliding Window` `HashTable`

</details>
