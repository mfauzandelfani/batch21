/** Display year is kabisat and display month */

function getDays(month, year) {
  var days = new Date(year, month, 0).getDate();
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log(`This month has ${days} days, ${year} adalah tahun kabisat`);
  } else {
    console.log(`This month has ${days} hari`);
  }
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
