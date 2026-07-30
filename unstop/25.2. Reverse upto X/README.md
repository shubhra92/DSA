> ## Problem Statement

The program aims to reverse a linked list up to a given element x (including x). The code accepts the number of elements in the linked list n, n integer elements to be inserted in the linked list, and the element x up to which the linked list needs to be reversed.

The program then creates a linked list, reverses it to element x, and prints the original and reversed linked list.

Note: If the element is not found, reverse the linked list.

If there are multiple occurences of x , then consider the leftmost occurence.


> ## Input Format
```
- Line one takes the length of the linked list.
- Line two takes n elements.
- Line three takes element x.
```

> ## Output Format
```
Returns reversed linked list up to a given element x.

```

> ## Constraints
```
- 1 <= N <= 10^4
- 1 <= x <= 10^4
- 1 <= linked list -> data <= 10^4

```


> ## Sample Testcase 0

**Testcase Input**
```
5
1 2 3 4 5
4

```
**Testcase Output**
```
4 3 2 1 5
```
**Explanation**

Input is 1->2->3->4->5->NULL
A linked list is reversed up to x,i.e. 4 here.
After reverse 
4->3->2->1->5->NULL


---

> ## Sample Testcase 1

**Testcase Input**
```
6
1 2 3 4 5 6
100
```
**Testcase Output**
```
6 5 4 3 2 1
```
**Explanation**

Input is 1->2->3->4->5->6->NULL
As x is not found, i.e. 100.
Reverse the entire linked list.

---


<details>
<summary><strong>Companies</strong></summary>

`Cisco`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Reverse` `Linked List`

</details>
