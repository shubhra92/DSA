> ## Problem Statement

Rima has formed a team of N members to participate in a college maths competition. Each team member takes a different amount of time, represented by Ai, to solve a problem.

If the competition requires the team to solve K maths problems, and each problem takes the same amount of time to complete, what is the minimum amount of time required for the team to finish all the problems?

> ## Input Format
```
The first line of input consists of two space-separated integers N and K representing the team size and the number of problems assigned to the team, respectively. 

The second line of input contains N space-separated integers representing the time each team member takes to solve a single problem.
```

> ## Output Format
```
Print a single integer representing the minimum time required for the entire team to solve all the assigned maths problems

Print -1 if it is impossible to do so.
```

> ## Constraints
```
0≤ N ≤10^5

0≤ K ≤10^9

0<=Ai<=10^9
```


> ## Sample Testcase 0

**Testcase Input**
```
3 7
3 2 5
```
**Testcase Output**
```
8
```
**Explanation**

In 8 units, the first member can solve 2 problems, the second member can solve 4 problems, and the third member can solve 1 problem, resulting in a total of 7 problems solved.


It can be proven that it is not possible to solve all the problems in a time frame of less than 8 units.


---

> ## Sample Testcase 1

**Testcase Input**
```
10 10
6 6 4 3 4 9 3 2 6 10

```
**Testcase Output**
```
6
```
**Explanation**

In 6 units, the first member can solve 1 problem, the second member can solve 1 problem,  the third member can solve 1 problem, the fourth member can solve 2 problems ,the fifth member can solve 1 problem,the sixth member can solve 0 problem,the seventh member can solve 2 problem,the eighth member can solve 3 problem,the ninth member can solve 1 problem and the tenth member can solve 0 problem ,resulting in a total of 12 problems solved(which is greater than 10).


It can be proven that it is not possible to solve all the problems in a time frame of less than 6 units.


---


<details>
<summary><strong>Companies</strong></summary>

`Visa` `Morgan Stanley` `Flipkart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Sorting` `Math` `Binary Search`

</details>
