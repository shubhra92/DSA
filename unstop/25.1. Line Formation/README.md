> ## Problem Statement

On the occasion of Independence Day, students lined up in the form of a linked list for a prayer at school. However, the teacher wants them to rearrange themselves in non-decreasing order of their heights to present a better appearance.
Determine the number of students who need to change their positions to achieve the teacher's desired arrangement.


> ## Input Format
```
The first line of input contains an integer N, representing the size of the LinkedList.

The second line of input contains N space-separated integers,representing the heights of the students in the LinkedList.
```

> ## Output Format
```
Display the minimum number of changes they must make to make the LinkedList in non-decreasing order.

```

> ## Constraints
```
1 ≤  N ≤10^6

1 ≤  Node.val ≤10^6

```


> ## Sample Testcase 0

**Testcase Input**
```
5
2 3 4 5 6

```
**Testcase Output**
```
0
```
**Explanation**

The values are already in the correct position, so the count is 0.


---

> ## Sample Testcase 1

**Testcase Input**
```
5
1 8 27 2 3
```
**Testcase Output**
```
4
```
**Explanation**

The correct formation should be 
1 2 3 8 27
So, in 4 positions, the values are different.

---


<details>
<summary><strong>Companies</strong></summary>

`Goldman Sachs` `Paytm` `Flipkart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Sorting` `Merge Sort` `Dynamic Memory Allocation` `Linked List`

</details>
