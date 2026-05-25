> ## Problem Statement

Chris is at the entrance of Adventureland, where there is a magic grid of size N×N, filled entirely with the number 1.

To gain entry, he must quickly calculate the sum of the integers on both the main and secondary diagonals of the grid.

The main diagonal consists of elements where the row and column indices are the same, i.e., (0,0), (1,1), (2,2), ..., (N-1,N-1).

The secondary diagonal consists of elements where the row index and column index sum to N−1, i.e., (0,N-1), (1,N-2), (2,N-3), ..., (N-1,0).

Note: If N is odd, the center element (at index (N//2,N//2)) is counted twice, but it should only be considered once for the final sum.

> ## Input Format
```
The first line of input consists of integer N representing the number of rows and columns of the matrix.
```

> ## Output Format
```
Print a single line of output consisting of the sum of the diagonal integers
```

> ## Constraints
```
1<= N <= 105
```


> ## Sample Testcase 0

**Testcase Input**
```
3
```
**Testcase Output**
```
5
```
**Explanation**

The matrix is:
1 1 1
1 1 1
1 1 1


Main diagonal sum: 1+1+1=3
Secondary diagonal sum: 1+1+1=3
But the center element (1) is counted twice, so we subtract 1.
The total sum is 3+3−1=5.


---

> ## Sample Testcase 1

**Testcase Input**
```
2
```
**Testcase Output**
```
4
```
**Explanation**

The matrix is:
1 1
1 1


Main diagonal sum: 1+1=2
Secondary diagonal sum: 1+1=2?
The total sum is 2+2=4.


---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `Zoom` `MAQ Software` `Twilio` `Deolitte`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Math` `Grid` `Basic Arithmetic` `Matrix`

</details>
