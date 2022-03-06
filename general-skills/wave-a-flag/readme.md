# picoCTF: Wave a flag
### Description
Can you invoke help flags for a tool or binary? [This program](https://mercury.picoctf.net/static/cfea736820f329083dab9558c3932ada/warm) has extraordinarily helpful information...

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{b1scu1ts_4nd_gr4vy_30e77291}
```
### Detailed Solution
 The challenge gives us a link to download a 64-bit ELF Executable file named "warm". Trying to run it with:

```
./warm
Hello user! Pass me a -h to learn what I can do!
./warm -h
```
</details>