> ## Problem Statement

You are given an alphanumeric string S, and you need to convert it into a string containing only alphabets by following certain steps.

You need to find a unique number which is the floor average of all prime numbers present in the string. Then, you need to find the number(index) by taking the mod of the numeric character with a unique number, and replace the numeric character of the string with the alphabet(a-z) present in that index.

For example if the index is 5 then the character will be replaced with ‘f’.
If there aren’t any prime numbers in the string, take the numeric character as an index.
For convenience, all alphabets are in lowercase.


> ## Input Format
```
The first line of input contains an integer N representing the length of the alphanumeric string.
The second line of input contains the alphanumeric string S with length N.
```

> ## Output Format
```
For each test case, print the modified string.
```

> ## Constraints
```
1 <= N <= 10^4

0 <= numeric character <= 9
```


> ## Sample Testcase 0

**Testcase Input**
```
5
a4b9c
```
**Testcase Output**
```
aebjc
```
**Explanation**


1. The alphanumeric string is "a4b9c".

2. The numeric characters are 4 and 9.

3. There are no prime numbers present in this string.

4. Since there are no primes, we simply replace each numeric character with the letter corresponding to its value:
  For '4': 'e' (the 4th letter)
  For '9': 'j' (the 9th letter)



5. Substituting these replacements back into the string:
  Replacing '4' with 'e' and '9' with 'j'.




Thus, the final modified string is: "aebjc"

---

> ## Sample Testcase 1

**Testcase Input**
```
13
ae4hjh5k33j58
```
**Testcase Output**
```
aeahjhbkddjba
```
**Explanation**

Step-by-Step Explanation:



1. Identify Numeric Characters:

  The numeric characters in the string are: 4, 5, 3, 3, 5, 8.



2. Identify Prime Numbers:

  The prime numbers among these are:

  5 (prime)

  3 (prime)

  3 (prime)

  5 (prime)

  The prime numbers are: 5, 3, 3, 5, .



3. Calculate the Floor Average of Primes:

  Average=(5+3+3+5) / 4=16 / 4 = 4

  Thus, the unique number is 4.



4. Replace Numeric Characters:

  For '4': 4 mod  4 = 0 → 'a' (the 0th letter)

  For '5': 5mod  4 = 1 → 'b' (the 1st letter)

  For the first '3': 3mod  4 = 3 → 'd' (the 3rd letter)

  For the second '3': 3mod  4 = 3 → 'd' (the 3rd letter)

  For '5': 5mod  4 = 1 → 'b' (the 1st letter)

  For '8': 8mod  4 = 0 → 'a' (the 0th letter)



5. Construct Modified String:



Replace the numeric characters in the original string "ae4hjh5k33j58":



'4' → 'a'

'5' → 'b'

'3' → 'd'

'3' → 'd'

'5' → 'b'

'8' → 'a'




The modified string becomes: "aeahjhbkddjba".

---


<details>
<summary><strong>Companies</strong></summary>

`Amazon` `Adobe`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Math` `Strings`
</details>
