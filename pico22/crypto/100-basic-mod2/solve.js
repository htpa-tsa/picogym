x = "145 167 233 272 344 91 395 393 433 92 77 414 344 318 420 263 87 186 96 103 91 354 161".split(" ");
y = x.map(x => x % 41).map(x => modInverse(x, 41));
z = [];

for(let i = 0; i < y.length; i++) {
    if(y[i] >= 1 && y[i] <= 26) z.push(String.fromCharCode(y[i] + 64));
    else if(y[i] >= 27 && y[i] <= 36) z.push(y[i] - 27);
    else if(y[i] == 37) z.push("_");
}

console.log(`picoCTF{${z.join("")}}`);

//credit to: https://stackoverflow.com/questions/26985808/calculating-the-modular-inverse-in-javascript 

function modInverse(a, m) {
    [a, m] = [Number(a), Number(m)]
    if (Number.isNaN(a) || Number.isNaN(m)) {
      return NaN
    }
    a = (a % m + m) % m
    if (!a || m < 2) {
      return NaN
    }
    const s = []
    let b = m
    while(b) {
      [a, b] = [b, a % b]
      s.push({a, b})
    }
    if (a !== 1) {
      return NaN
    }
    let x = 1
    let y = 0
    for(let i = s.length - 2; i >= 0; --i) {
      [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
    }
    return (y % m + m) % m
  }