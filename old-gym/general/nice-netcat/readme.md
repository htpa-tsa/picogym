# picoCTF: Nice netcat...
### Description
There is a nice program that you can talk to by using this command in a shell: `$ nc mercury.picoctf.net 35652`, but it doesn't speak English...

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{g00d_k1tty!_n1c3_k1tty!_********}
```
### Detailed Solution
Run a "From Char Code" on https://gchq.github.io/CyberChef/ given `112 105 99 111 67 84 70 123 103 48 48 100 95 107 49 116 116 121 33 95 110 49 99 51 95 107 49 116 116 121 33 95 55 99 48 56 50 49 102 53 125 10`.
</details>