// variabel : adalah tempat penyimpananan data
// let nama  = 'fachri'
let nama = "fachri";
const umur = 18;
// tipe data : jenis data yang bisa disimpan dalam variabel
//  tipe data di bawah ini adalah tipe data primitif : tipe data yang nilai nya tunggal
//  tipe data string = adala tipe data yang ditutup kutip
let namaKaryawan = "fachridjohar";

console.log("nama karyawan: ", namaKaryawan);

// number : tipe data khusus angka
const salary = 3000000;
console.log("gaji : ", salary);

// tipe data boolean : tiope data yang mengadung nilai kebenaran true or false
let isMarried = false;
console.log("apakah sudah menikah :", isMarried);

// tipe data null : tipe data kosong
const hisChild = null;
console.log("anak :", hisChild);
// undefined : tipe data yang tidak  mendefisikan
let wife;
wife = "kamilah";
console.log("istri :", wife);
// variabel let data nya bisa di ubah
// variabel conts data nya tidak bisa di ubah
// penulisa kata di javascpirt mengunakan camelCase

// tipe data non primitif : tipe data yang nilai nya kopleks

// tipe data object : tipe data kompleks yang menyimpan kumpulan data dengan nilai dan tipe data yang berbeda

let karyawan = {
  nama: "fachri",
  salary: 1234567,
  job: "Fulstack",
};
console.log("data karyawan :", karyawan); // apabila inggin memanggil sala satu tipe data di dalam object mengunakan titik
// tipe data array : tipe data uang nyimpen bayak data

let daftarKarywan = ["fachri", "danu", "dudung"]; // apabila inggin memanggil sala satu tipe data di dalam object mengunakan perhitungan dengan mengunakan[]
console.log("list karyawan :", daftarKarywan); // gunakan index untuk memanggil data dalam array

let dataKarywan = [
  { nama: "fachri", umur: 20 },
  { nama: "dinda", umur: 20 },
];
console.log("list karyawan: ", dataKarywan);

console.log(dataKarywan[0].nama);
