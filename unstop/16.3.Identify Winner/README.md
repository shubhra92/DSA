> ## Problem Statement

You are at a lucky draw event where N people are standing on a road, each holding a paper with a number written on it. However, they are unaware of the numbers on their own papers.

The winner of the lucky draw is the first person in the line who has a unique number, meaning no other person in the line has the same number. If there is no unique number, print 0.

Your task is to determine the winner based on the numbers written on the papers.

> ## Input Format
```
The first line contains an integer N, representing the number of people.

The second line contains N space-separated integers, where each integer represents the number written on a person's paper.
```

> ## Output Format
```
Print a single integer representing the number on the paper of the winner. If there is no unique number, print 0.

```

> ## Constraints
```
1 ≤ N ≤ 10^6

-10^4 ≤ A[i] ≤ 10^4

A[i] !=0 
```


> ## Sample Testcase 0

**Testcase Input**
```
3
1 1 1
```
**Testcase Output**
```
0
```
**Explanation**

All three people have the number 1, which is not unique. Therefore, there is no winner, and the output is 0.

---

> ## Sample Testcase 1

**Testcase Input**
```
5
-1 2 -1 3 2
```
**Testcase Output**
```
3
```
**Explanation**

The first person has -1, the second person has 2, the third person has -1, the fourth person has 3, and the fifth person has 2.

The first unique number encountered is 3 (held by the fourth person). Therefore, the output is 3.

---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `Twilio` `Phonepay`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Hash Map` `Sorting` `Hashing` `Array`
</details>
