// buat lah operasi
let a, b, c;
console.log("======================");
console.log("==== Fachri Djohar ===");
console.log("======================");
a = 10;
console.log("x =", a);
b = 20;
console.log("y =", b);
c = 30;
console.log("z =", c);
let perjumblahan = a + b + c;
console.log("perjumblahan =", perjumblahan);
let pengurangan = a - b - c;
console.log("pengurangan =", pengurangan);
let perkalian = a * b * c;
console.log("perkalian =", perkalian);
let pembagian = a / b / c;
console.log("pembagian =", pembagian);
let modulus = (a % b) % c;
console.log("modulus =", modulus);
let jumblahKalihBagi = perjumblahan + (pengurangan * perkalian) / pembagian;
console.log("jumbalah-kali-bagi =", jumblahKalihBagi);
console.log("total =", jumblahKalihBagi);
console.log("======================");

// soal 2 : hitung berapa detik dalam 30hari mengguanakan operator matimatika
let menit = 60;
let jam = 60;
let satuhari = 24;

let berapaDetik = 24 * 60 * 60;
let hasil = berapaDetik * 30;
console.log("berapadetik dalah 30 hari =", hasil);

/*soal 3 cari hobby didalam data yang dikirim dari parameter user
jika object user atau properti hobby tidak ditemukan maka return "hobby tidak ada*/
function findUserHobby(user) {
  //tulis jawaban nya disini
  let country = user && user1.hobby && user && user2.hobby;
  return country || "Hobyy tidak ada";
}

let user1 = {
  nama: "owi kun",
  age: 25,
  hobby: ["membaca", "Menulis"],
};
let user2 = {
  nama: "mega chan",
  age: 25,
};
console.log(findUserHobby(user1));
console.log(findUserHobby(user2));

// LOGIC

/* soal 4 : buat logic swicth case untuk menampilkan nama hari pake bahasa inggris berdasarkan input angka 1-7
jika angka yang dimasukan diluar retang tersebut, maka tampilkan pesan 'input tidak valid'*/
/* soal 5 : buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang di dapat
 *jika nilai lebih dari atau sama dengan 80, maka status nya 'anda lulus dengan sangat baik'
 *jika nilai lebih dari atau sama dengan 70, Dan kurang dari 80, maka statusnya 'lulus dengan baik'
 *jika nilai lebih dari atau sama dengan 70, dan kurang dari 70, maka statusnya 'lulus'
 *jika nilai kurang dari 60, maka status nya 'tidak lulus
 */
/* soal 6 : nested if
buat lah logic untuk nentuin nilai rata-rata siswa dengan menghitung nilai rata-rata dari 3 mapel (MTK, fisika, kimia)
jika nilai yang dimasukan tidak valid(diluar rentang 0- 100), maka status nya 'nilai tidak valid'
jika nilai rata-rata lebih besar atau sama dengan 80, maka status nya 'selamat anda lulus dengan baik'
jika nilai rata-rata lebih kecil dari 80 lebih besar atau sama dengan 60, maka status nya 'anda lulus'
jika nilai rata-rata lebih kecil dari 60 maka status nya 'anda tidak lulus
*/

/* soal 7 :
buat logic untuk menentukan jenis bilangan(positif, negatif , atau nol)
output nya di harapkan : ('angka 7 adalah positif)
*/

/* soal 8 : nested if
 * buat program untuk menghitung total  harga pembelian barang pakai nested if
jika total harga sama dengan 0 maka tampilan pesan 'harga tidak valid'
jika total pembelian melebihi 1 juta , maka berikan diskon sebesar 10%
sedangkan jika total pembelian melebihi 500 ribu maka berikan diskon sebesar 5% . jika di bawah 500 ribu tidak di berikan diskon.
*tampikan pesan berikut ' anda membeli barang <jumlah barang> <namabarang> dengan harga <hargabarang> per-<namabarang>, total harga sebelum diskon =<total harga>
* jika belum mendapat kan diskon, tampilkan pesan 'anda belum mendapatkan diskon, harga total <hargasetelahdiskon>
*/

// soal nomor 4
let hari = 1; // nilai input yang akan dikirim ke switch case

switch (hari) {
  case 1: // kondisi
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break; // menghentikan eksekusi ketika kondisi terpenuhi
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default: // kodisi jika semua case tidak terpenuhi22
    console.log("input tidak valid");
    break;
}

// soal nomor 5
let nilaiLulus = 75;

if (nilaiLulus >= 80) {
  console.log("anda lulus dengan sangat baik");
} else if (nilaiLulus >= 70 && nilaiLulus < 80) {
  console.log("lulus dengan baik");
} else if (nilaiLulus <= 70) {
  console.log("lulus");
} else {
  console.log("tidak lulus");
}

// soal nomor 6

let nilaiRata2 = 90;

if (nilaiRata2 >= 60) {
  if (nilaiRata2 >= 80) {
    console.log("anda lulus dengan sangat baik");
  } else {
    console.log("anda lulus");
  }
} else if (nilaiRata2 <= 60) {
  console.log("anda tidak lulus");
} else {
  console("nilai tidak valid");
}

// soal nomor 7
let angka = 0;

if (angka > 0) {
  console.log("Positif");
} else if (angka < 0) {
  console.log("Negatif");
} else {
  console.log("Noll");
}

//  soal nomor 8

let barang = "sabun";
let harga = 2000;
let jumlah = 2;
let juta = 1000000 - 100;
let limaPersen = 500000 - 25;
if (harga >= 500000) {
  if (harga >= 1000000) {
    console.log(
      "anda membeli barang" +
        barang +
        "dengan harga " +
        juta +
        "per-" +
        harga +
        "total harga sebelum diskon 10%"
    );
  } else {
    console.log(
      "anda membeli barang" +
        barang +
        "dengan harga " +
        limaPersen +
        "per-" +
        harga +
        "total harga sebelum diskon 10%"
    );
  }
} else if (harga <= 500000) {
  console.log("anda belum mendapatkan diskon, harga total ");
} else {
  console.log("harga tidak valid");
}

// Loop

/* soal 9 : for lop
buat program untuk mencari bilangan prima dari 1-25 mengunakan for lop
*/

/* soal 10 :  for lopp
buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakn function

*/

/* soal 11 : for loop
buat function untuk menghitung jumlah huruf kapital pada String
*/

/* soal 12 : for lopp
buat fungsi mencari nilai tertinggi dari sebuah array
*/

/* soal 13 : for lopp
buatlah funsi untuk membuat piramid(segitiga sama kaki) yang terbuat dari bintang '*'
dengan jumblah barir yang ditentukan oleh user
*/
//jawaban nomor 9 :\
let max = 25;

for (let i = 2; i <= max; i++) {
  let isPrima = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrima = false;
      break;
    }
  }
  if (isPrima) {
    console.log(i);
  }
}

// soal nomor 10 :

function hitungRataRata(a) {
  if (a.length == 0) {
    return;
  }
  let jumlah = 0;
  for (let i = 0; i < a.length; i++) {
    jumlah += a[i];
  }
  let rata2 = jumlah / a.length;
  return rata2;
}
const dataBilanganBulat = [2, 4, 6, 8, 10];
const jawaban = hitungRataRata(dataBilanganBulat);
console.log("ini jawaban", jawaban);

// soal 11 :

function hitungKapital(a) {
  let jumlahKapital = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= "A" && a[i].toUpperCase()) {
      jumlahKapital++;
    }
  }
  return jumlahKapital;
}

let string1 = "Hello Wordl";
let string2 = "Kiw, Gimana kabarnya?";
let string3 = "JAVaScRipT";
console.log("ini :", hitungKapital(string1));
console.log("jwb :", hitungKapital(string2));
console.log("pokok :", hitungKapital(string3));

// soal 12 :
const nilaiTertinggi = [1, 34, 21, 54, 6567, 234, 65865, 98764, 23, 453];
let kamu = nilaiTertinggi[0];
for (let i = 1; i < nilaiTertinggi.length; i++) {
  if (nilaiTertinggi[i] > kamu) {
    max = nilaiTertinggi[i];
  }
}
console.log(kamu);

// soal 13 :

function buatPramida(pramida) {
  for (let i = 1; i <= pramida; i++) {
    let spasi = " ".repeat(pramida - i);
    let bintang = "*".repeat(2 * i - 1);
    console.log(spasi + bintang);
  }
}

let jumblah = 5;
console.log(buatPramida(jumblah));
