> ## Problem Statement

Ram has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money Ram can rob without alerting the police.


> ## Input Format
```
- Each line contains a level order traversals of tree:
- “1 2 3 4 null 5”
- Null node in level order traversal is represented by ‘null’
```

> ## Output Format
```
Print the maximum amount of money the thief can rob without alerting the police.

```

> ## Constraints
```
- The number of nodes in the tree is in the range [1, 5000].
- 0 <= Node.val <= 104

```


> ## Sample Testcase 0

**Testcase Input**
```
3 2 3 null 3 null 1
```
**Testcase Output**
```
7
```
**Explanation**

Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

---

> ## Sample Testcase 1

**Testcase Input**
```
3 4 5 1 3 null 1
```
**Testcase Output**
```
9
```
**Explanation**

Maximum amount of money the thief can rob = 4 + 5 = 9.

---


<details>
<summary><strong>Companies</strong></summary>

`Accenture` `Wipro` `Mastercard`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Tree Traversal` `Dynamic Programming` `Binary Tree`


</details>
