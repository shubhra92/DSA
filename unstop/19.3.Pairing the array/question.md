> ## Problem Statement

Ram was playing with an array when he got to know the existence of different patterns found in arrays. He wrote code for different kinds of patterns and enjoyed it a lot, one day he got stuck in a pattern and asked for your help.

He gave you an array let’s call it arr and asked you to find the number of pairs of (i,j) such that given a number k :

- 0<=i<j<=arr.length - 1
- arr[i] * arr[j] is divisible by k.

Given an array and a number k, find the number of pairs of elements in the array such that their product is divisible by k.


> ## Input Format
```
The first line contains a single integer, k.

The second line contains a single integer, n, representing the number of elements in the array.

The third line contains space-seperated n integers, arr[i], representing the elements of the array.
```

> ## Output Format
```
Print the number of pairs divisible by k.

```

> ## Constraints
```
1 <= arr.length<= 105

1 <= arr[i], k <= 105

```


> ## Sample Testcase 0

**Testcase Input**
```
3
5
1 2 3 4 5
```
**Testcase Output**
```
4
```
**Explanation**

The possible pairs of numbers which satisfy the given condition are (2,4), (1,4) , (4,5), (3,4) hence the number of pairings possible is 4.

---

> ## Sample Testcase 1

**Testcase Input**
```
1
4 
1 2 3 4
```
**Testcase Output**
```
6
```
**Explanation**

The possible pairs of numbers which satisfy the given condition are (1,2) (1,3) (1,4) (2,3) (2,4) (3,4) hence the number of pairings possible is 6.

---


<details>
<summary><strong>Companies</strong></summary>

`Flipkart` `Zoho`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Two Pointers` `Array` `Math` `Hash Table`
</details>
