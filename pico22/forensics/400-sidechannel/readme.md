# picoCTF: SideChannel
### Description
There's something fishy about this PIN-code checker, can you figure out the PIN and get the flag? Download the PIN checker program here pin_checker Once you've figured out the PIN (and gotten the checker program to accept it), connect to the master server using **nc saturn.picoctf.net 55824** and provide it the PIN to get your flag.

<details closed>
<summary>Solution</summary>
  The challenge provides a pin checker program, and the name of the challenge seems to be a reference to timing-based side channel attacks. Timing-based side channel attacks take consideration of a program's response times to different inputs. Running the program, we are required to input an 8-digit PIN code. Anything less or greater than 8 digits, the program immediately stops. Although we can reverse engineer the program with Ghidra, finding how to conduct side channel attacks might be a better learning experience. 
  PIN codes generally include a numeric input. We could brute force the pin checker, but there may be a more efficient method for approaching this challenge manually.  
    
\
┌─[✗]─[user@user]─[~/pico/pico22/sidechannel]  
└──╼ $time echo 11111111 |./pin_checker   
Please enter your 8-digit PIN code:
8  
Checking PIN...  
Access denied.  
  
real	0m0.144s  
user	0m0.129s  
sys	0m0.007s  
\
┌─[✗]─[user@user]─[~/pico/pico22/sidechannel]  
└──╼ $time echo 41111111 |./pin_checker   
Please enter your 8-digit PIN code:  
8  
Checking PIN...  
Access denied.  
  
real	0m0.281s  
user	0m0.265s  
sys	0m0.011s  
\
    With different numbers, it looks like the PIN-checker program's response time is delayed with each "correct" digit. Following this same thought process, we bring ourselves to the correct PIN that could be used on the master server. 
  
### Flag
```
picoCTF{t1m1ng_4tt4ck_********}
```
### Detailed Solution

</details>
