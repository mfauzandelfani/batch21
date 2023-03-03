import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

let listCart = [
  { el: prod1.setPrice(6750000) },
  { el: prod2.setPrice(14400000) },
  { el: prod3.setPrice(3150000) },
  { el: prod4.setPrice(10800000) },
  { el: prod5.setPrice(23400000) },
];

const totalTagihan = listCart.reduce((sum, { el }) => sum + el, 0);
console.log(`Total Tagihan = ${totalTagihan}`); //Total Tagihan =64.700.000

const totalTagihanDiscount = (discount) => {
  console.log(`Total Tagihan discount ${prod1.prodName} = ${(prod1.price - prod1.price * (discount / 100)) * prod1.setTotalBuy(1)}`);
  console.log(`Total Tagihan discount ${prod2.prodName} = ${(prod2.price - prod5.price * (discount / 100)) * prod2.setTotalBuy(1)}`);
  console.log(`Total Tagihan discount ${prod3.prodName} = ${(prod3.price - prod3.price * (discount / 100)) * prod3.setTotalBuy(1)}`);
  console.log(`Total Tagihan discount ${prod4.prodName} = ${(prod4.price - prod4.price * (discount / 100)) * prod4.setTotalBuy(1)}`);
  console.log(`Total Tagihan discount ${prod5.prodName} = ${(prod5.price - prod5.price * (discount / 100)) * prod5.setTotalBuy(1)}`);
};

totalTagihanDiscount(10); //Total Tagihan discount=58.580.000
