const nilai = 1;

switch (nilai) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Tidak diketahui");
    break;
}

const nilai2 = 80;

switch (nilai2) {
  case nilai >= 80:
    console.log("A");
    break;
  case nilai < 80 && nilai >= 60:
    console.log("B");
    break;
  case nilai < 60 && nilai >= 40:
    console.log("C");
    break;
  default:
    console.log("Tidak Diketahui");
    break;
}
