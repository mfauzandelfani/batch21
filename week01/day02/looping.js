let n = 0;
while (n <= 6) {
  console.log(n);
  n++;
}

do {
    console.log(n);
    n++
} while (n <=5);
let str = "";
for (let index = 0; index < 5; index++) {
  str = str + "" + index;
}
console.log(str);

const angka = [12,13,14,15]
for (const key in angka) {
   console.log(key);
}

for (const iterator of angka) {
   console.log(iterator);
}