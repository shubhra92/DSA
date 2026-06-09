> ## Problem Statement

Alice challenged Bob to write the same word as his on a typewriter. Both are kids and are making some mistakes in typing and are making use of the ‘#’ key on a typewriter to delete the last character printed on it.

An empty text remains empty even after backspaces. 


> ## Input Format
```
The first line contains a string typed by Bob.

The second line contains a string typed by Alice.
```

> ## Output Format
```
The first line contains ‘YES’ if Alice is able to print the exact words as Bob , otherwise ‘NO’.
```

> ## Constraints
```
1 <= Bob.length

Alice.length <= 100000

Bob and Alice only contain lowercase letters and '#' characters.
```


> ## Sample Testcase 0

**Testcase Input**
```
ab#c
ad#c
```
**Testcase Output**
```
YES
```
**Explanation**

Here ,
The actual typed string by Bob : ‘ac’
The actual typed string by Alice : ‘ac’
Hence , they matched.

---


> ## Sample Testcase 1

**Testcase Input**
```
a#c
b
```
**Testcase Output**
```
NO
```
**Explanation**

Here ,
The actual typed string by Bob : ‘c’
The actual typed string by Alice : ‘b’
Hence , they do not matched.

---


<details>
<summary><strong>Companies</strong></summary>

 `TCS` `Avizva` `Wipro` `Infosys`
</details>

<details>
<summary><strong>Topics</strong></summary>

 `TCS` `Avizva` `Wipro` `Infosys`

</details>
