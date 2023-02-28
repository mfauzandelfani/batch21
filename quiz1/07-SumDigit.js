function sumDigit(n) {
  var d = ((n - 1) % 9 + 1) ;
  if (d > 10) {
    console.log("harus lebih kecil dari 10");
  } else if (d <= 10) {
    return d;
  }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
