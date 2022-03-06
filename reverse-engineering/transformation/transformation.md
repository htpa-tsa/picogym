# picoCTF: Transformation
### Description
I wonder what this really is... [enc](https://mercury.picoctf.net/static/dd6004f51362ff76f98cb8c699510f23/enc)  `''.join([chr((ord(flag[i]) << 8) + ord(flag[i + 1])) for i in range(0, len(flag), 2)])`

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{16_bits_inst34d_of_8_e141a0f7}
```
### Detailed Solution
Run a "Magic" recipe on https://gchq.github.io/CyberChef/. enc is a .txt with UTF-16 characters.
</details>