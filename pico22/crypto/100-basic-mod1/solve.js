x = "54 211 168 309 262 110 272 73 54 137 131 383 188 332 39 396 370 182 328 327 366 70".split(" ");
y = x.map(x => x % 37);
z = [];
for(let i = 0; i < y.length; i++) {
    if(y[i] >= 0 && y[i] <= 25) z.push(String.fromCharCode(y[i] + 'A'.charCodeAt(0)));
    else if(y[i] >= 26 && y[i] <= 35) z.push(y[i] - 26);
    else if(y[i] == 36) z.push("_");
}

z = z.join("");
console.log(`picoCTF{${z}}`);