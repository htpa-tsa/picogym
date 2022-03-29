
# picoCTF: GET aHEAD
### Description
Find the flag being held on this server to get ahead of the competition [http://mercury.picoctf.net:53554/](http://mercury.picoctf.net:53554/)

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
picoCTF{r3j3ct_th3_du4l1ty_2e5ba39f}
```
### Detailed Solution
GET  aHEAD implies you need to [GET HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) of the website. The hint says "Maybe you have more than two choices", which refers to "GET" and "POST", and the aforementioned secret "HEAD".
From MDN Docs:
> The **HTTP  `HEAD`  method** requests the [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) that would be returned if the `HEAD` request's URL was instead requested with the HTTP [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) method. For example, if a URL might produce a large download, a `HEAD` request could read its [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) header to check the filesize without actually downloading the file.
> 
 Using `curl`,
 ```bash
curl -I HEAD -i http://mercury.picoctf.net:53554/
 ```
The flag's there!
</details>