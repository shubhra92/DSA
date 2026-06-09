> ## Problem Statement

Three characteristics of N food items are represented in three arrays classified as fat, protein, and vitamin. There are three categories of people, first who needs only that food which is rich in fat but with no protein and vitamins, a second who needs only that food which is rich in protein but with no fat and vitamin, and lastly, who needs only that food which is rich in vitamin but with no protein and fat. Write a program to return the number of food items eligible for the three categories.

> ## Input Format
```
The input consists of four lines. The first line contains a single integer N. The second line contains N space-separated integers denoting the array fat[]. The third line contains N space-separated integers denoting the array protien[]. The fourth line contains N space-separated integers denoting the array vitamin[].
```

> ## Output Format
```
Print three space-separated numbers.

```

> ## Constraints
```
- 1 ≤ N ≤ 10^2
- 1 ≤ arr[I] ≤10^2
```


> ## Sample Testcase 0

**Testcase Input**
```
3
1 2 3
3 4 5
2 4 5
```
**Testcase Output**
```
1 0 0
```
**Explanation**

From array fat, there is a single element, i.e., 1, which is not in array protein and vitamin. For protein and vitamins many elements are present only in protein and vitamins. So, the answer is 1 0 0.


---

> ## Sample Testcase 1

**Testcase Input**
```
4
1 2 3 4
5 6 7 8
9 9 9 9
```
**Testcase Output**
```
4 4 4
```
**Explanation**

In all three arrays, elements are unique, meaning they don't occur in any arrays other than theirs. Hence the answer is 4, 4, 4. 

---


<details>
<summary><strong>Companies</strong></summary>

`Yahoo` `Amazon` `Yatra.com`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Hash Map` `Searching` `sorting`
</details>
