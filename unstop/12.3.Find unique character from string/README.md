> ## Problem Statement

Smit and Joy are playing a game to see who can come up with a more unique string. To determine the winner, they calculate the mean of the number of unique characters in their respective strings.

Given two strings of equal length, write a program to determine the winner or if it's a tie.

 

For a given string S, its mean is calculated by :

(mean)S = number_of_unique_characters(S)/length(S)

> ## Input Format
```
The first line contains an integer N, representing the length of the strings.

The second and third lines contain the strings created by Smit and Joy, respectively.
```

> ## Output Format
```
Print a single line with the winner's name in capital letters or "TIE" if Smit and Joy have the same mean number of unique characters.
```

> ## Constraints
```
0 <= N <= 5*10^3

Both strings created by Smit and Joy are of length N and consist only of English alphabetic characters.
```


> ## Sample Testcase 0

**Testcase Input**
```
4
abcd
abbc
```
**Testcase Output**
```
SMIT
```
**Explanation**

In the first test case, Smit's string contains 4 unique characters (a, b, c, and d) and Joy's
string contains 3 unique characters (a, b, and c). Therefore, Smit has a mean of 1 unique
character per letter while Joy has a mean of 0.75 unique characters per letter, making Smit
the winner.


---

> ## Sample Testcase 1

**Testcase Input**
```
5
abcde
bcdef

```
**Testcase Output**
```
TIE
```
**Explanation**

In the second test case, Smit's string and Joy's string both contain 5 unique characters (a, b,
c, d, and e). Therefore, both players have a mean of 1 unique character per letter, resulting
in a tie.


---


<details>
<summary><strong>Companies</strong></summary>

`OYO Rooms` `Yatra.com` `Flipkart`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Hashing` `Hash Set` `Frequency` `Strings`

</details>
