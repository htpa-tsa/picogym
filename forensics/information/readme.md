# picoCTF: information
### Description
Files can always be changed in a secret way. Can you find the flag? [cat.jpg](https://mercury.picoctf.net/static/a614a27d4cb251d04c7d2f3f3f76a965/cat.jpg)

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{the_m3tadata_1s_modified}
```
### Detailed Solution
Use `exiftool` to view metadata on the image:
```bash
exiftool cat.jpg
ExifTool Version Number         : 11.88
File Name                       : cat.jpg
...
...
...
License                         : cGljb0NURnt0aGVfbTN0YWRhdGFfMXNfbW9kaWZpZWR9
...
...
...
```
Run a Base64 decode on `cGljb0NURnt0aGVfbTN0YWRhdGFfMXNfbW9kaWZpZWR9` to get the flag!
</details>