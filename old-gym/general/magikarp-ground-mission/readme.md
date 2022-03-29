# picoCTF: Magikarp Ground Mission
### Description
Do you know how to move between directories and read files in the shell? Start the container, `ssh` to it, and then `ls` once connected to begin. Login via `ssh` as `ctf-player` with the password, `********`
<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{xxsh_0ut_0f_//4t3r_********}
```
### Detailed Solution
Let's first connect to that given instance:
```bash
ssh ctf-player@venus.picoctf.net -p *****
```
Once inputting the password we have entered this system. When using `ls` we get two files:
- `1of3.flag.txt`
- `instructions-to-2of3.txt`

Running `cat` on the former file gives us:
```
picoCTF{xxsh_
```
The latter file gives us:
```
Next, go to the root of all things, more succinctly `/`
```
This implies you need to go to the root folder. Let's head there and see what files are there:
```bash
cd / && ls -al
2of3.flag.txt  bin  boot  dev  etc  home  instructions-to-3of3.txt  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```
In `/` we get:
- `2of3.flag.txt`
- `instructions-to-3of3.txt`

Using `cat` on the former file gives us:
```
0ut_0f_\/\/4t3r_
```
Using `cat` on the latter file gives us:
```
Lastly, ctf-player, go home... more succinctly `~`
```
Let's do this:
```bash
cd ~ && ls -al
3of3.flag.txt drop-in
```
There's our last file! Just `cat` it and combine everything together to get your  flag.
</details>