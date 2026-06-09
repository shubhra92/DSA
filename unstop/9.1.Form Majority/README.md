> ## Problem Statement

You are given an array of votes each student has got in the student election in your university.You have to find the subsequence of votes of the students who can form majority to run the student association.

A majority is formed when the students have strictly received more than half of the total votes polled.

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.


> ## Input Format
```
The first line contains the length of password array.

The second Line contains N number eachdenoting to the votes scored by the particular student.
```

> ## Output Format
```
You have to print the list of votes scored by a student that would form the majority in non-increasing order.
```

> ## Constraints
```
- 1<= Size of vote array<= 4*10^4
- 0<=Value at any index is<=100
```


> ## Sample Testcase 0

**Testcase Input**
```
5
4 3 10 9 8
```
**Testcase Output**
```
10 9
```
**Explanation**

The sub sequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.

---


<details>
<summary><strong>Companies</strong></summary>

`Wipro` `Tech Mahindra` `Accenture` `Indeed`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Greedy` `Sorting` `Array`
</details>
