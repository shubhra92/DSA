> ## Problem Statement

Alice is playing a game in which she has been given several strings and has been provided with a list of numbers. Robert would burst a balloon K times. Each time Robert burst a balloon, Robert is to Replace the list numbers by the additive inverse of the number.

When completed, Alice would get the maximum possible sum of Alice's numbers as prize money.

Print the prize money Alice would get.


> ## Input Format
```
The first line contains two space separated integers N and K.

The second line contains N spce-seprated integers denoting the elements of the array.
```

> ## Output Format
```
Display an integer denoting the maximum sum Alice can get after K operations.

```

> ## Constraints
```
1 ≤ N,K ≤ 10^5

-10^9 ≤ Ai ≤ 10^9

```


> ## Sample Testcase 0

**Testcase Input**
```
4 3
9 8 8 5

```
**Testcase Output**
```
20
```
**Explanation**

1. Replace (5) by (-5), array becomes {9,8,8,-5}


2. Replace (-5) by -(-5), array becomes {9,8,8,5}


3. Replace (5) by (-5), array becomes {9,8,8,-5}


Here, the sum of the array is 20 which is the maximum possible.


---

> ## Sample Testcase 1

**Testcase Input**
```
5 4
-2 0 5 -1 2
```
**Testcase Output**
```
10
```
**Explanation**

1. Replace (-2) by -(-2), array becomes {2, 0, 5, -1, 2}


2. Replace (-1) by -(-1), array becomes {2, 0, 5, 1, 2}


3. Replace (0) by -(0), array becomes {2, 0, 5, 1, 2}


4. Replace (0) by -(0), array becomes {2, 0, 5, 1, 2}


Here, the sum of the array is 10 which is the maximum possible.

---


<details>
<summary><strong>Companies</strong></summary>

`Directi` `Faceset`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Math` `Array`

</details>
