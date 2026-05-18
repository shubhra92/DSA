> ## Problem Statement

Marco likes numbers a lot. His friend Shyam gives him a number array A  of length N and a target value K. He first asks him to sort the array A and to tell him the indices of the numbers where the target value will match with that element.

Help Marco solve this crazy problem and print out the indices of target value K in array A


> ## Input Format
```
The first line contains the integer N, representing the number of inputs.

The second line contains N space-separated integers, representing the values of array A.

The third line contains an integer K representing target value.
```

> ## Output Format
```
The first line contains the integer M; the number of indexes matches the target value.

The second line contains M space-separated integers denoting the indexes of target value.
```

> ## Constraints
```
1 <= N <= 10^5

1 <= A[i], K <= 10^5
```


> ## Sample Testcase 0

**Testcase Input**
```
5
1 2 5 2 3
3
```
**Testcase Output**
```
1
3
```
**Explanation**

After sorting, A is [1,2,2,3,5]. 

The index where A[i] == 3 is 3.

---

> ## Sample Testcase 1

**Testcase Input**
```
5
1 2 5 2 3
2
```
**Testcase Output**
```
2
1 2
```
**Explanation**

After sorting, A is [1,2,2,3,5]. 

The indices where A[i] == 2 are 1 and 2.

---


<details>
<summary><strong>Companies</strong></summary>

`SAP labs` `Citrix` `Accolite`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Sorting` `PriorityQueue` `Array`
</details>
