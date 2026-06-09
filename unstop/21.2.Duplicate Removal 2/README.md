> ## Problem Statement

Pushpendra is an engineering student, who has been trying to solve a sequence and series problem. However he was sleeping when the online classes were taken and his younger sister was helping him take notes and has tried her best to take down everything. But due to the teacher repeating then numbers in the list repeatedly she has taken down some numbers multiple times. Now pushpendra wants to remove all the duplicates from his list in order to better understand the concept and not get confused any further.

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Note: If the resulting linked list is empty after removing duplicates, print "null". Otherwise, print the values of the remaining nodes in the linked list.


> ## Input Format
```
The First line of the input contains integer N (size of list)

The next N line each containing an integer representing list values.
```

> ## Output Format
```
Print linked list after removing all duplicate nodes.

```

> ## Constraints
```
The number of nodes in the list is in the range [0, 300].

-100 <= Node.val <= 100

The list is guaranteed to be sorted in ascending order.

```


> ## Sample Testcase 0

**Testcase Input**
```
50
1
4
5
8
9
10
10
14
16
17
21
21
21
25
26
30
31
33
37
40
43
45
46
48
49
49
51
55
57
59
65
66
66
72
73
76
78
79
81
82
85
88
89
90
91
93
94
96
99
100
```
**Testcase Output**
```
1 4 5 8 9 14 16 17 25 26 30 31 33 37 40 43 45 46 48 51 55 57 59 65 72 73 76 78 79 81 82 85 88 89 90 91 93 94 96 99 100
```
**Explanation**

Duplicated Identified:
10 appears twice.
21 appears three times.
49 appears twice.
66 appears twice.


After removing all occurrences of the duplicate values, the resulting list should only include the numbers that appear exactly once.

---

> ## Sample Testcase 1

**Testcase Input**
```
50
1
5
6
7
8
9
10
12
12
19
20
21
22
23
24
25
26
30
32
32
35
38
39
43
44
45
47
49
52
56
57
60
65
72
75
77
78
80
80
83
84
85
87
90
91
93
94
96
97
98
```
**Testcase Output**
```
1 5 6 7 8 9 10 19 20 21 22 23 24 25 26 30 35 38 39 43 44 45 47 49 52 56 57 60 65 72 75 77 78 83 84 85 87 90 91 93 94 96 97 98
```
**Explanation**

Initially, the list contains duplicates like 12, 32, 80.
As the list is sorted, the duplicates are consecutive.
Starting from the head, 12 occurs twice. Therefore, all occurrence of 12 is removed.
Similarly, 32 and 80 occur twice, and their duplicates are removed.


After the removal of duplicates, the remaining unique elements form the sorted linked list given in the output.
This updated explanation provides the corrected output after removing the duplicates in the sorted linked list, retaining only the distinct elements in ascending order.

---


<details>
<summary><strong>Companies</strong></summary>

`Oracle` `Flipkart` `Accenture`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Two Pointers` `Iterator` `Linked List`
</details>
