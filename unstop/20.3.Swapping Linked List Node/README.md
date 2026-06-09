> ## Problem Statement

Ram gave Shyaam a challenge, he gave shyaam the head of a linked list, and an integer K.

He asked Shyaam to swap the values of the Kth node from the beginning and the Kth node from the end (the list is 1-indexed).

Note: The number of nodes in the list is N.

> ## Input Format
```
The first line contains an integer N, representing the number of nodes in the linked list.
The second line contains N space-separated integers, each representing the value of a node in the linked list.
The third line contains an integer K, indicating the positions of the nodes to be swapped.
```

> ## Output Format
```
Output the linked list after swapping the values of the two specified nodes. by space-separated integers

```

> ## Constraints
```
1 <= K <= N <= 10^5
0 <= Node.val <= 10^2

```


> ## Sample Testcase 0

**Testcase Input**
```
5
1 2 3 4 5
3
```
**Testcase Output**
```
1 2 3 4 5
```
**Explanation**

The 3rd node from the start is 3 and the 3rd node from the end is also 3.


Since the nodes are the same, no swapping is needed

---

> ## Sample Testcase 1

**Testcase Input**
```
5
1 2 3 4 5
2
```
**Testcase Output**
```
1 4 3 2 5
```
**Explanation**

The 2nd node from the start is 2 and the 2nd node from the end is 4.


After swapping their values, the list becomes: 1 -> 4 -> 3 -> 2 -> 5.


2 is the second node and 4 is the 2nd last node values of which are swapped.

---


<details>
<summary><strong>Companies</strong></summary>

`Goldman Sachs` `DoorDash` `Mastercard`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Two Pointers` `Linked List`

</details>
