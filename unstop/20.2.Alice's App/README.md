> ## Problem Statement

Given the root of a binary tree, imagine yourself standing on the left side of it.

Return the values of the nodes you can see, ordered from top to bottom.

Note: Tree node values are given in a level-order traversel,

where N in the sequence represents the NULL node.

> ## Input Format
```
The first line contains an integer N, representing the Number of Nodes in the Tree
The second line contains N space-separated values, representing the Tree Nodes in level order
```

> ## Output Format
```
Print the values visible from the left side of the binary tree in top-to-bottom order.

```

> ## Constraints
```
1 ≤  N ≤ 10^5
1 ≤  Node.val  ≤ 10^5

```


> ## Sample Testcase 0

**Testcase Input**
```
6
1 2 3 N N 4
```
**Testcase Output**
```
1 2 4
```
**Explanation**

```
     1
    / \
   2   3
      /
     4
```
If she looks at the tree from the left side, only Nodes 1, 2, and 4 will be visible.

---

> ## Sample Testcase 1

**Testcase Input**
```
3
1 2 3
```
**Testcase Output**
```
1 2
```
**Explanation**

```
        1


      /   \


    2       3

```
If she looks at the tree from the left side, only Nodes 1, 2 will be visible.

---


<details>
<summary><strong>Companies</strong></summary>

`Capital One` `Oracle` `Amazon` `Microsoft`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Tree` `Tree Level Order` `Binary Tree`
</details>
