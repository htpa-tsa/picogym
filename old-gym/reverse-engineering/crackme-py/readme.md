# picoCTF: crackme-py
### Description
[crackme.py](https://mercury.picoctf.net/static/f440bf2510a28914afae2947749f2db0/crackme.py)
<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{1|\/|_4_p34|\|ut_8c551048}
```
### Detailed Solution
We are given a python file called `crackme.py`. Let's open it up and see what's going on:
```bash
nano crackme.py
```
At the beginning we see a global declaration of a `bezos_cc_secret` :
```python
# Hiding this really important number in an obscure piece of code is brilliant!
# AND it's encrypted!
# We want our biggest client to know his information is safe with us.
bezos_cc_secret = "A:4@r%uL`M-^M0c0AbcM-MFE0g4dd`_cgN"
```
Not much further down we see:
```python
def decode_secret(secret):
    """ROT47 decode

    NOTE: encode and decode are the same operation in the ROT cipher family.
    """
```
Hmmm... let's try ROT47 on that `bezos_cc_secret`. 
I used this one and got the flag:
https://www.dcode.fr/rot-47-cipher

</details>