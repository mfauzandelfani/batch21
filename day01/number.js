const n = "187.33";
console.log(parseInt(n));
console.log(parseFloat(n));

const a = "asdf";
console.log(Number(a));

const round = 123.456789;
console.log(round.toFixed());
console.log(round.toExponential(2));

let currency = new Intl.NumberFormat("ID", {
  style: "currency",
  currency: "IDR",
}).format(round);
console.log(currency);

console.log(isNaN("asd"));
console.log(isNaN("123"));
