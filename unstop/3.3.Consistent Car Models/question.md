> ## Problem Statement

Imagine you have a list of allowed car components (e.g., engine, wheels) given as a string with each component as a character. You are also given a collection of car models given as an array of strings with components of the ith car denoted as characters of the ith string.

A car model is consistent if all its components exist in the allowed list.

Your task is to count how many car models in the collection meet this criterion, ensuring they are built from allowed components


> ## Input Format
```
In the first line, a string "components" denoting the allowed components is given to you. 

In the second line, an integer "n" denoting the number of car models is given to you. 

In the third line, the elements of the array "models" denoting the components of the n car models is given to you.
```

> ## Output Format
```
Count of consistent cars is displayed to you. 
```

> ## Constraints
```
1 <= n <= 104
1 <= components.length<=26
1 <= models[i].length <= 100
The characters in the components are distinct.
```


> ## Sample Testcase 0

**Testcase Input**
```
emta
6
etmb e et eam mtb akm
```
**Testcase Output**
```
3
```
**Explanation**

The car models that are consistent are: e, et, eam

---


> ## Sample Testcase 1

**Testcase Input**
```
tam
5
maaat mttt mmaaa maka mbta
```
**Testcase Output**
```
3
```
**Explanation**

The car models that are consistent are: "maaat", "mttt", "mmaaa" because it contains only the components that are allowed.

---


<details>
<summary><strong>Companies</strong></summary>

`Cisco` `Square` `Accolite` `Nagarro`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Hash Table` `Ordered Set` `Bit Manipulation` `String` `Array`

</details>
