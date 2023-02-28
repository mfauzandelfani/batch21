/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  let harga = parseInt(price);
  let pajak = parseInt(tax);
  let diskon = parseInt(discount);

  var a = harga;
  var b = (price * discount) / 100;
  var c = price - (price * discount) / 100;
  var d = parseFloat(c / tax);
  if (harga !== price && pajak !== tax && diskon !== discount) {
  } else if (harga === price && pajak === tax && diskon === discount) {
    console.log("-----------");
    console.log(`Total Sales: Rp.${a}`);
    console.log(`Discount (${discount}%): Rp.${b}`);
    console.log(`PriceAfterDiscount: Rp.${c}`);
    console.log(`Pajak (${tax}%): Rp.${d}`);
    console.log("-----------");
    console.log(`TotalPayment: Rp.${a + 202.5}`);
  }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
