> ## Problem Statement

Alice and Bob are running on two different roads, represented as linked lists A and B. Your task is to determine whether these two roads eventually cross.

- Two roads are considered to cross if they share at least one common node at any position along their paths, even if Alice and Bob never meet at the same time
- Check if there exists any common node between the two linked lists.

Print 1 if there exists such a common node; otherwise, print 0.


> ## Input Format
```
The first line of input contains two integers N and M representing the size of the two linked lists.
The second line of input contains N space-separated integers, representing the node values of the first road of length N length.
The third line of input contains M space-separated integers, representing the node values of the second road of length M length.
```

> ## Output Format
```
Print 1 if their roads merge into one at any point,otherwise, print 0.

```

> ## Constraints
```
1 ≤  N , M ≤10^5
1 ≤  Node.val ≤10^5

```


> ## Sample Testcase 0

**Testcase Input**
```
3 3
2 3 4
5 6 7
```
**Testcase Output**
```
0
```
**Explanation**

In this test case:


Road A (linked list) consists of the nodes with values 2, 3, 4.


Road B (linked list) consists of the nodes with values 5, 6, 7.


The two roads do not cross at any point. There are no common nodes between the two linked lists. As a result, the answer is 0, indicating that there is no intersection between the two roads.

---

> ## Sample Testcase 1

**Testcase Input**
```
3 4
1 3 5
2 5 1 6
```
**Testcase Output**
```
1
```
**Explanation**

In this test case:


Road A (linked list) consists of the nodes with values 1, 3, 5.


Road B (linked list) consists of the nodes with values 2, 5, 1, 6.


The two roads cross at node 1, as both linked lists share this node at some point in their paths. Even though they may not meet at the same time, they do have a common node. Therefore, the answer is 1, indicating that the roads intersect at node 1.

---


<details>
<summary><strong>Companies</strong></summary>

`Walmart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Math` `Linked List`
</details>
