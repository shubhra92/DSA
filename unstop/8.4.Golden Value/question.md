> ## Problem Statement

You are given an array Arr of length N. Your task is to find the "Golden value" derived from the array.

The Golden value G is calculated as the absolute difference between the sum of XOR values of all even-length subarrays and the sum of XOR values of all odd-length subarrays. Specifically:

SE is the sum of the XOR values of all even-length subarrays.
SO is the sum of the XOR values of all odd-length subarrays.
The golden value G is defined as: G=∣SE−SO∣


> ## Input Format
```
The first line of input contains an integer N, representing the length of the array Arr.

The second line of input contains N space-separated integers, representing the elements of the array Arr.
```

> ## Output Format
```
Display a single integer representing the golden value G.
```

> ## Constraints
```
1 <= N <= 10^6

1 <= Arr[i] <= 10^6
```


> ## Sample Testcase 0

**Testcase Input**
```
3
1 2 3
```
**Testcase Output**
```
2
```
**Explanation**

The array is [1, 2, 3].

Possible subarrays are: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3].

Odd-length subarrays: [1], [2], [3], [1, 2, 3]. Their XORs are 1, 2, 3, and 0, respectively.

Even-length subarrays: [1, 2], [2, 3]. Their XORs are 3 and 1, respectively.

SE = 3 + 1 = 4, SO = 1 + 2 + 3 + 0 = 6.
Golden value G = |4 - 6| = 2.

---


> ## Sample Testcase 1

**Testcase Input**
```
2
8 10
```
**Testcase Output**
```
16
```
**Explanation**

The array is [8, 10]. Possible subarrays are: [8], [10], [8, 10].

Odd-length subarrays: [8], [10]. Their XORs are 8 and 10, respectively.
Even-length subarrays: [8, 10]. Its XOR is 2.

SE = 2, SO = 8 + 10 = 18.
Golden value G = |2 - 18| = 16.

---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `Barclays` `Flipkart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Subarray` `Bit Manipulation` `Recursion` `Dynamic Programming` `Array`
</details>
