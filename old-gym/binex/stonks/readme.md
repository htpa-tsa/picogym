
# picoCTF: Stonks
### Description
I decided to try something noone else has before. I made a bot to automatically trade stonks for me using AI and machine learning. I wouldn't believe you if you told me it's unsecure! [vuln.c](https://mercury.picoctf.net/static/a4ce675e8f85190152d66014c9eebd7e/vuln.c)  `nc mercury.picoctf.net 59616`

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{I_l05t_4ll_my_m0n3y_********}
```
### Detailed Solution
```c
printf("What is your API token?\n");
scanf("%300s", user_buf);
printf("Buying stonks with token:\n");
printf(user_buf);
```
This snippet in vuln.c is vulnerable to a [format string attack](https://en.wikipedia.org/wiki/Uncontrolled_format_string). When asked to put an API token type spam `%x%x%x%x%x%x%x%x%x...` to print call stack data. Take that output and run it through the `magic` tool on [CyberChef](https://gchq.github.io/CyberChef/) to get the flag.
</details>