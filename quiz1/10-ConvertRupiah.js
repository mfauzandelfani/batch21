/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  var a = 0;

  if (type === "yen") {
    a = 112.1 * money;
    let currency = new Intl.NumberFormat("ID", {
      style: "currency",
      currency: "IDR",
    }).format(a);
    console.log(money, type, "=", currency);

  } else if (type === "usd") {
    a = 15.269 * money;
    let currency = new Intl.NumberFormat("ID", {
      style: "currency",
      currency: "IDR",
    }).format(a);
    console.log(money, type, "=", currency);
  }else if(type === "euro"){
     a = 16.13 * money;
     let currency = new Intl.NumberFormat("ID", {
       style: "currency",
       currency: "IDR",
     }).format(a);
     console.log(money, type, "=", currency);
  }else{
    console.log("no match type currency");
  }
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
