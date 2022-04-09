# picoCTF: Eavesdrop
### Description
Download this packet capture and find the flag.

<details closed>
<summary>Solution</summary>
  The challenge provides a packet capture file (capture.flag.pcap), which means that we can analyze it with Wireshark.
  We're provided a conversation between two users of a program, and interestingly enough they transfer a file through that program. Looking through the capture file, packet 57 contains a phrase that seems to be "Salted" , which means that some of the data transmitted was encrypted somehow. Luckily enough, as we look through the entirety of the conversation, one of the users asks how to decrypt the information within the file. We go back to packet 57 to export the data to a file, use the command provided within the conversation to decrypt the data, and are given the flag. 
  
### Flag
```
picoCTF{nc_*****_***_********}
```
### Detailed Solution

</details>
