/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {

  if (start < end) {
    console.log(`Total kenaikan income ${((end - start) / start) * 100}%`);
  }else if (start > end){
    var turun = Math.ceil(((start - end) / start) * 100);
    console.log(`Total penurunan income -${turun}%`);

  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
