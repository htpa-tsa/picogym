# picoCTF: Tab, Tab, Attack
### Description
Using tabcomplete in the Terminal will add years to your life, esp. when dealing with long rambling directory structures and filenames: [Addadshashanammu.zip](https://mercury.picoctf.net/static/fe16c756149cfa85f23e73cd9dbd6a25/Addadshashanammu.zip)

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{l3v3l_up!_t4k3_4_r35t!_********}
```
### Detailed Solution
```bash
unzip Addadshashanammu.zip # COMPLETE WITH TAB
```
In `Addadshashanammu.zip\Addadshashanammu\Almurbalarammi\Ashalmimilkala\Assurnabitashpi\Maelkashishi\Onnissiralis\Ularradallaku` there is an ELF file named `fang-of-haynekhtnamet`:
```bash
chmod +x fang-of-haynekhtnamet
./fang-of-haynekhtnamet
*ZAP!* picoCTF{l3v3l_up!_t4k3_4_r35t!_********} # OUTPUT, ******** IS RANDOM
```
</details>