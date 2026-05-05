> ## Problem Statement

Given an array of intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.


> ## Input Format
```
First line contains an integers denoting the no. of rows, N.

Second line contains an integer M, which will always be 2.

Next N lines contains two space-seprated integers denoted start and end.
```

> ## Output Format
```
Display the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
```

> ## Constraints
```
1 <= intervals.length<= 105

intervals[i].length == 2

-5 * 104<= starti <endi <= 5 * 104
```


> ## Sample Testcase 0

**Testcase Input**
```
3
2
1 2
1 2
1 2
```
**Testcase Output**
```
2
```
**Explanation**

You need to remove two [1,2] to make the rest of the intervals non-overlapping.

---


> ## Sample Testcase 1

**Testcase Input**
```
1 
2
2 3
```
**Testcase Output**
```
0
```
**Explanation**

You don't need to remove any of the intervals since they're already non-overlapping.

---


<details>
<summary><strong>Companies</strong></summary>

`Tech Mahindra` `Faceset` `Byjus`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Greedy` `sorting`

</details>
