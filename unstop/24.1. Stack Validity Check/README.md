> ## Problem Statement

Kritika is given two integer arrays pushed and popped of the same size n, where one is a permutation of the other.

Your task is to determine if the array popped could have been the result of a sequence of pop operations on an initially empty stack, where elements are pushed onto the stack in the order given by the pushed array and can be poped to from a squence of pop operations. 

For example - On initially empty stack with pusher array = [1,2,3,4]. we can perform operations - push 1, push 2, push 3, pop 3, push 4, pop 4, pop 2, pop 1 the pop sequence will be [3, 4, 2, 1]. your task to match pop sequence with popped array

If this is possible, print “true”. Otherwise, print "false" and the print the count of prime numbers less than or equal to the minimum number of elements left in the stack.

> ## Input Format
```
First line of input contains n.

Next line contains n space separated integers denoting the pushed sequence.

Next line contains n space separated integers denoting the popped sequence.
```

> ## Output Format
```
Print "true" if the popped sequence is valid.

Otherwise, print "false" and the print the count of prime numbers less than or equal to the number of elements left in the stack.

```

> ## Constraints
```
1<=n,pushed[i], popped[i]<=10^5;

All the elements of pushed array will be unique.

```


> ## Sample Testcase 0

**Testcase Input**
```
7
1 2 3 4 5 6 7
3 2 6 1 5 7 4
```
**Testcase Output**
```
false
2
```
**Explanation**

Start with an empty stack 

push 1, push 2, push 3, pop 3, pop 2, push 4, push 5, push 6, pop 6, push 7.

At this point, it's not possible to pop 1, 5, 7, and 4 from the stack in the order given in popped.

Thus, 1, 5, 7, 4 remain in the stack, and the total number item left in the stack is 4.

The prime numbers less than or equal to 4 are 2 and 3, so the count is 2.

---

> ## Sample Testcase 1

**Testcase Input**
```
5
1 2 3 4 5
4 5 3 2 1
```
**Testcase Output**
```
true
```
**Explanation**

Start with an empty stack


push 1, push 2, push 3, push 4, pop 4, push 5, pop 5, pop 3, pop 2, pop 1

At this point, all elements of popped sequence are popped from the stack in the order given in popped.

Thus, the output is "true".

---


<details>
<summary><strong>Companies</strong></summary>

`Wipro`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Stack` `Prime Sieve` `Stack` `Two Pointers` `Simulation`

</details>
