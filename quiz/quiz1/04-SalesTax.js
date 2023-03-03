/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
  let harga = parseInt(price);
  let pajak = parseInt(tax);

  if (harga !== price && pajak !== tax) {
  } else if (harga === price && pajak === tax) {
    console.log(`Total Sales: Rp.${harga}`);
    console.log(`Pajak: ${pajak / 10}`);
    console.log("TotalHarga+Pajak: Rp.", pajak + price);
  }
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak harus dalam angka
console.log(getSalesTax(4500, 3));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
