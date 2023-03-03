/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  isKabisat(year1, year2);
}

var arrays = [];
function isKabisat(year1, year2) {
  var kabisat = 0;
  for (let index = year1; index <= year2; index++) {
    if (index % 400 == 0 || (index % 100 != 0 && index % 4 == 0)) {
      kabisat += 1;
    }
  }
  console.log(`Jumlah kabisat adalah:`, kabisat);
}

howManyKabisat(1997,2021);
