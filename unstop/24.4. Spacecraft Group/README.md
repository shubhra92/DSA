> ## Problem Statement

There are n spaceship at given lightyears away from the earth and traveling to reach a distant star system at k lightyear away from earth. You are given two integer arrays, position and speed, both of length n, where

P[i] is the current distance of the ith spaceship
S[i] is the speed of the ith spaceship in lightyears per year.
As the spaceships travel toward the star system, an interesting phenomenon occurs: when a faster spaceship catches up to a slower one, it reduces its speed to match the slower spaceship's speed, forming a fleet. A fleet is a group of one or more spaceships that travel together at the same speed.

Given this information, determine the number of distinct spacecraft fleets that will arrive at the destination star system. A fleet is considered distinct if no other fleet arrives at the destination at the same time while traveling together.



> ## Input Format
```
- The first line contains an integer 'n', representing the total number of spaceships.
- The second line contains an integer 'k', representing the distance of the star system from Earth.
- The third line contains 'n' space-separated integers denoting the current distance of the i-th spaceship from Earth.
- The fourth line contains 'n' space-separated integers denoting the speed of the i-th spaceship.
```

> ## Output Format
```
Return the number of spacecraft fleets that will arrive at the destination.

```

> ## Constraints
```
- 1 <= n <= 10^5
- 0 < k <= 10^6
- 0 <= P[i] < target
- 0 < S[i] <= 10

```


> ## Sample Testcase 0

**Testcase Input**
```
4
14
10 8 5 3
2 4 1 3
```
**Testcase Output**
```
2
```
**Explanation**

There are 4 spacecraft on the cosmic highway to reach distant star system.


At t = 0: Initially, they are at [10, 8, 5, 3]
At t = 1: The new position will be [12, 12, 6, 6] Now,


Fleet 1: Spacecraft 1 and Spacecraft 2 will form a fleet with common speed of min(spacecraft 1 speed, spacecraft 2 speed) = min(2,4) = 2
Fleet 2: Spacecraft 3 and Spacecraft 4 will form a fleet with common speed of min(spacecraft 3 speed, spacecraft 4 speed) = min(1,3) = 1

At t = 2:  The new position will be [14, 14, 7, 7]
Fleet 1 will arrive at destination with spacecraft 1 and spacecraft 2
 
At t = 9:  The new position will be [-, -, 14, 14] 
Fleet 2 will arrive at destination with spacecraft 3 and spacecraft 4

---

> ## Sample Testcase 1

**Testcase Input**
```
3
100
4 2 5
2 4 5
```
**Testcase Output**
```
2
```
**Explanation**

There are 3 spacecraft on the cosmic highway to reach distant star systems.


At t = 0: Initially, they are at [4, 2, 5] with speed [2, 4, 5]
At t = 1: The new position will be [6, 6, 10] Now,


Fleet 1: Spacecraft 1 and Spacecraft 2 will form a fleet with common speed of min(spacecraft 1 speed, spacecraft 2 speed) = min(4,2) = 2
Fleet 2: Spacecraft 3 will be alone in this fleet


At t = 19:  The new position will be [42, 42, 100]
Fleet 2 will arrive at its destination with spacecraft 3 only.
 
At t = 48:  The new position will be [100, 100, -] 
Fleet 2 will arrive at destination with spacecraft 1 and spacecraft 2

---


<details>
<summary><strong>Companies</strong></summary>

`Infosys` `Microsoft`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Monotonic Stack` `Sorting` `Stack`

</details>
