> ## Problem Statement

A car company has projected its daily profit and loss for the next N days. Each day's financial outcome is represented as an integer:

- A positive value indicates a profit.
- A negative value indicates a loss.
Your task is to determine whether the sequence of profits and losses can be rearranged such that, at no point during the N days, does the cumulative sum become zero. The rearranged sequence must be in either non-decreasing or non-increasing order.

Additionally, simply sorting the numbers is not enough—the chosen order must ensure that no prefix sum of the sequence is ever zero. If one order fails, try the other order. If neither order is valid, print "IMPOSSIBLE".

If both orders satisfy the condition, print the order that starts with the larger first element to ensure a deterministic output.

> ## Input Format
```
The first line contains an integer N, denoting the number of days.

The second line contains N integers representing the profit and loss for each day.
```

> ## Output Format
```
Print “POSSIBLE” followed by the rearranged sequence if it is possible to meet the condition. Otherwise, print “IMPOSSIBLE.”
```

> ## Constraints
```
1 ≤ N ≤ 100

−50 ≤ Ai ≤ 50
```


> ## Sample Testcase 0

**Testcase Input**
```
4
1 -1 2 -2
```
**Testcase Output**
```
IMPOSSIBLE
```
**Explanation**

No rearranged permutation can satisfy the condition


---

> ## Sample Testcase 1

**Testcase Input**
```
7
2 3 1 4 5 -9 8
```
**Testcase Output**
```
POSSIBLE
8 5 4 3 2 1 -9
```
**Explanation**

Non-Decreasing Order: [-9, 1, 2, 3, 4, 5, 8]
Prefix Sum Calculation: -9, -8, -6, -3, 1, 6, 14 (No zero)


Non-Increasing Order: [8, 5, 4, 3, 2, 1, -9]
Prefix Sum Calculation: 8, 13, 17, 20, 22, 23, 14 (No zero)


Choosing the Order:
Since both orders work, we select the one that starts with the larger first element:
POSSIBLE

8 5 4 3 2 1 -9


---


<details>
<summary><strong>Companies</strong></summary>

`Zoho` `VMware`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `sorting`
</details>
