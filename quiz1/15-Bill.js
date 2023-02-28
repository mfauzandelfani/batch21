/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
  const a = taxGaji(gaji1);
  const b = taxGaji(gaji2);
  const c = taxGaji(gaji3);

  const a1 = gaji1 + gaji1 * a;
  const b1 = gaji2 + gaji2 * b;
  const c1 = gaji3 + gaji3 * c;
  console.log(`EMP1 : Rp. ${gaji1} + Pajak(2%) = Rp. ${gaji1 + (gaji1*a)}`);
  console.log(`EMP2 : Rp. ${gaji2} + Pajak(5%) = Rp. ${gaji2 + (gaji2 * b)}`);
  console.log(`EMP3 : Rp. ${gaji3} + Pajak(5%) = Rp. ${gaji3 + (gaji3 * c)}`);
  console.log(`Total: Rp.${a1+b1+c1}`);
}

function taxGaji(gaji) {
  if (gaji >= 10000) {
    return (10 / 100).toFixed(2);
  } else if (gaji >= 1000 && gaji < 10000) {
    return (5 / 100).toFixed(2);
  } else if (gaji >= 100 && gaji < 1000) {
    return (2 / 100).toFixed(2);
  }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
