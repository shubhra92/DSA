> ## Problem Statement

You own an enigma machine that can interpret a string command. The command consists of strings: "S", "[]" and/or "[sps]" in some order.
The enigma will interpret:

- "S" as the string "send"
- "[]" as the string "the"
- "[sps]" as the string “ships".

You are assigned with the task of parsing this information and getting to know teh masterplan of the allies and take advantage in the war. Each word is separated by a space “ ”.
Given the string command, return the enigma’s interpretation of the command.

> ## Input Format
```
The first line contain the string S.
```

> ## Output Format
```
Print the string which is the enigma’s interpretation of the command.

```

> ## Constraints
```
0<S.length<=2*10^6
```


> ## Sample Testcase 0

**Testcase Input**
```
[sps]S[]
```
**Testcase Output**
```
ships send the
```
**Explanation**

The enigma interprets the command as follows:
S -> send
[] -> the
[sps] -> ships
The final concatenated result is "ships send the".


---

> ## Sample Testcase 1

**Testcase Input**
```
S[]
```
**Testcase Output**
```
send the
```
**Explanation**

The enigma interprets the command as follows: S -> send, [] -> the. The final concatenated result is "send the".

---


<details>
<summary><strong>Companies</strong></summary>

`Flipkart` `Morgan Stanley` `Zoho`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Strings` `Greedy` `Array` `Stack` `Recursion` `Iterator`
</details>
