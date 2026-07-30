> ## Problem Statement

In a X-Y plane , N number of points are scattered in a plane.

You have to return K nearest points from origin(0,0).
If two points have the same distance from origin then the points with lower index in the input appears first.
Geometrical distance from origin to points X and Y is sqrt(X*X + Y * Y) .

> ## Input Format
```
First line contains two integers N(Number of points) and K(number of nearest points to find).
Next N lines contain two space separated integers denoting x-coordinate and y-coordinate of points .
```

> ## Output Format
```
Output consist of K lines .Each line contains two integers x and y, representing the K nearest points to the origin.

```

> ## Constraints
```
1≤ K< N ≤10^3

1≤ X,Y ≤ 10^3

```


> ## Sample Testcase 0

**Testcase Input**
```
12 5
9 4
8 10
9 11
18 18
19 19
9 6
13 2
4 18
12 5
14 7
3 7
5 4
```
**Testcase Output**
```
5 4
3 7
9 4
9 6
8 10
```
**Explanation**

Explanation
Calculate the square of the distance for each point:


[9,4]:97


[8,10]:164


[9,11]:202


[18,18]:648


[19,19]:722


[9,6]:117


[13,2]:173


[4,18]:340


[12,5]:169


[14,7]:245


[3,7]:58


[5,4]:41


Top 5 nearest points are [5,4], [3,7], [9,4],[9,6] ,[8,10]

---

> ## Sample Testcase 1

**Testcase Input**
```
4 2
2 3
3 1
1 9
2 6
```
**Testcase Output**
```
3 1
2 3
```
**Explanation**

Calculate the square of the distance for each point:


[2,3] :13


[3,1] :10


[1,9] :82


[2,6] :40


Top 2 nearest points are [3 1], [2 3]

---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `IBM` `Tech Mahindra`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Sorting` `Quickselect` `Heap (Priority Queue)` `Array` `Math`
</details>
