> ## Problem Statement

Ram loves Binary Search Trees (BSTs) due to their special property:

for any node, all values less than the node are located in the left subtree, and all values greater than the node are in the right subtree.

 

Ram is given two BSTs. One BST contains N nodes, and the other contains M nodes. Ram’s task is to merge the nodes values from both BSTs into a single sorted sequence. Help Ram achieve this by combining the node values from both BSTs into a sorted list.

> ## Input Format
```
The first line contains an integer N, representing the number of nodes in the first BST ( bst1.).
The second line contains N integers, representing the node values of bst1.
The third line contains an integer M, representing the number of nodes in the second BST ( bst2.).
The fourth line contains M integers, representing the node values of  bst2.
```

> ## Output Format
```
The output should contain M + N integers, representing all node values from both BSTs in sorted order,separated by spaces.

```

> ## Constraints
```
1 ≤ N, M ≤ 10^5
1 ≤ Node.value ≤ 10^6

```


> ## Sample Testcase 0

**Testcase Input**
```
3
2 1 4
3 
1 0 3 
```
**Testcase Output**
```
 0 1 1 2 3 4
```
**Explanation**

The first BST has values: [2, 1, 4].

The second BST has values: [1, 0, 3].

Combined values are: [2, 1, 4, 1, 0, 3].

After sorting: [0, 1, 1, 2, 3, 4].


In the above 2 BSTs taking both their values we have got resultant sorted sequence in a sorted fashion.

---

> ## Sample Testcase 1

**Testcase Input**
```
2
1 8
2
8 1
```
**Testcase Output**
```
1 1 8 8 
```
**Explanation**

The first BST has values: [1, 8].

The second BST has values: [8, 1].

Combined values are: [1, 8, 8, 1].

After sorting: [1, 1, 8, 8].    


Taking values of the above BST’s we have 1 1 8 8 as sorted sequence in the output.

---


<details>
<summary><strong>Companies</strong></summary>

`Paytm` `Ola`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Sorting, Binary Search` `Tree Traversal` `Sorting` `Binary Tree`
</details>
