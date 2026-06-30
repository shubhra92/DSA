> ## Problem Statement

Alice gave Bob a Linked List of size N and asked him to find the maximum sum among pairs formed by adding elements at symmetric positions from both ends of the list, such as

- (first element + last element)
- (second element + second last element),
- and so on up to the middle of the list.

You are given the head of the linked list. Your task is to determine the maximum sum based on this condition.


Note: The number of elements in the linked list is always even.

> ## Input Format
```
The first line contains an integer N – the size of LinkedList.
The second line contains the ‘N’ space-separated integers elements of the Linked List
```

> ## Output Format
```
Print a single integer ‘K’ – the maximum sum of symmetric pairs according to the given condition.

```

> ## Constraints
```
2 <= N<= 10^5  (N is even (i.e.,N can be 2, 4, 6, 8, ..., up to 10^5).)

-5*10^3 <= arr[i] <= 5*10^3

```


> ## Sample Testcase 0

**Testcase Input**
```
4
1 2 3 4
```
**Testcase Output**
```
5
```
**Explanation**

Sum of (1, 4) is 5 and sum of (2, 3) is also 5. So, the maximum sum is 5.

---

> ## Sample Testcase 1

**Testcase Input**
```
6
-1 2 3 2 4 2
```
**Testcase Output**
```
6
```
**Explanation**

First pair: (−1+2)=1


Second pair: (2+4)=6


Third pair: (3+2)=5


Now, the maximum sum is 6 from the second and third pairs. Hence, the output is 6.

---


<details>
<summary><strong>Companies</strong></summary>

`Zoho` `DoorDash`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Two Pointers` `Linked List` `Math`

</details>
