/** buat segitiga  */

let a = "";
for (let i = 5; i > 1; i--) {
  for (let j = 1; j < i; j++) {
    a += j + " ";
  }
  console.log(a);
  a = "";
}
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let b = "";
for (let i = 6; i > 1; i--) {
  for (let j = 1; j < i; j++) {
    b += i - j + " ";
  }
  console.log(b);
  b = "";
}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
