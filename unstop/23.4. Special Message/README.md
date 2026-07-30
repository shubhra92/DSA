> ## Problem Statement

Raj is a very good content writer. He usually writes repetitive words with some acronym so that he can save time and make a key-value pair list at the end of any report, or written document. Here the key denotes the acronym while the value is the corresponding value of the acronym. 
You are a junior assistant of Raj. You have to replace all the acronyms with their value. If any acronym is not found in the list of key-value pairs then replace it with “?”.
Note: All acronyms are enclosed with brackets “(“ and “)”.

> ## Input Format
```
The first line contains string S.
The second line contains N, which is the size of key-value pairs
Next N lines contain two strings as the first string will be key while the second string will be value.
```

> ## Output Format
```
Output the string S with all acronyms replaced with their corresponding values, or ? if the acronym is not found.

```

> ## Constraints
```
6<=s.length<=10^3
0<=n<=15

0<=length(any_string_of_pair)<= 100

Note: any trailing spaces at the end of your output will be count as wrong answer.

```


> ## Sample Testcase 0

**Testcase Input**
```
hello(name)
1
age five
```
**Testcase Output**
```
hello?
```
**Explanation**

(name) is acronym but it’s value is not available then the name is replaced by “?”.

---

> ## Sample Testcase 1

**Testcase Input**
```
(name)is(age)yearsold
2
name Mukesh
age fifty
```
**Testcase Output**
```
Mukeshisfiftyyearsold
```
**Explanation**

(name) and (age) are acronym,


The value of the (name) in “Mukesh” and The value of (age) is “fifty”

---


<details>
<summary><strong>Companies</strong></summary>

`Barclays` `Zomato` `jp morgan`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `HashTable` `Hashing`

</details>
