> ## Problem Statement

You are given a list of items, where each item is represented by an array of three strings: [type, color, name]. The list contains N items in total. Additionally, you are given a rule specified by two strings, ruleKey and ruleValue.
An item matches the rule if one of the following conditions is true:

- ruleKey == "type" and ruleValue is equal to the item's type.
- ruleKey == "color" and ruleValue is equal to the item's color.
- ruleKey == "name" and ruleValue is equal to the item's name.
Your task is to determine how many items in the list match the given rule.

> ## Input Format
```
The first line contains a single integer, N, representing the number of items.
The next N lines each contain three space-separated strings: the type, color, and name of an item.
The following line contains the string ruleKey.
The last line contains the string ruleValue.
```

> ## Output Format
```
Print the number of items that match the given rule.
```

> ## Constraints
```
1 <= N <= 10^4
1 <= type, color, name, ruleValue.length <= 10
```


> ## Sample Testcase 0

**Testcase Input**
```
3
phone blue pixel 
computer silver phone
phone gold iphone
type 
phone
```
**Testcase Output**
```
2
```
**Explanation**

Two items match the rule [type, phone]:


1) 1st item: [phone, blue, pixel]
2) 3rd item: [phone, fold, iPhone]


---

> ## Sample Testcase 1

**Testcase Input**
```
3
phone blue pixel 
computer silver lenovo
phone gold iphone
color 
silver
```
**Testcase Output**
```
1
```
**Explanation**

One item matches the rule [color, silver]:


1) 2nd item: [computer, silver, lenovo]


---


<details>
<summary><strong>Companies</strong></summary>

`Zoho` `Morgan Stanley`
</details>

<details>
<summary><strong>Topics</strong></summary>

`Array` `Strings`
</details>
