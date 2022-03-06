# picoCTF: Matryoshka doll
### Description
Matryoshka dolls are a set of wooden dolls of decreasing size placed one inside another. What's the final one? Image: [this](https://mercury.picoctf.net/static/f6cc2560a70b1ea811c151accba5390f/dolls.jpg)

<details closed>
<summary>Solution</summary>
  
  
### Flag
```
RANDOMLY GENERATED
```
### Detailed Solution
Use `binwalk` on `dolls.jpg` for any hidden files. Make sure you use the `-e` flag to extract any files:
```bash
binwalk -e dolls.jpg

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             PNG image, 594 x 1104, 8-bit/color RGBA, non-interlaced
3226          0xC9A           TIFF image data, big-endian, offset of first image directory: 8
272492        0x4286C         Zip archive data, at least v2.0 to extract, compressed size: 378955, uncompressed size: 383936, name: base_images/2_c.jpg
651613        0x9F15D         End of Zip archive, footer length: 22
```
Doing so will create a new directory called `_dolls.jpg.extracted`, which contains another directory called `base_images`. Entering there we can find another jpg, `2_c.jpg`. Repeat the `binwalk` process until you reach `4_c.jpg`, which when `binwalk`'ed will contain a `flag.txt`.
</details>